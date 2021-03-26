import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { render } from '@testing-library/react';
import { reducer } from './../store';
import Posts from './../pages/posts';
import '@testing-library/jest-dom/extend-expect';

const renderWithRedux = (
    component,
) => {
    const store = createStore(reducer)
    return {
        ...render(<Provider store={store}>
            {component}
        </Provider>),
        store,
    }
}


describe('Redux testing',() => {


    let component;
    beforeEach(() => component = renderWithRedux(<Posts/>))

    it("checks initial state",() => {
        const { store } = component
        expect(store.getState().posts.length).toEqual(0)
    })

    it("sets posts data and renders them",() => {
        const { store } = component
        const posts = [
            {
                id:'1',
                title:'Title',
                body:'Description',
                userId:1,
            },
            {
                id:'2',
                title:'Title',
                body:'Description',
                userId:2,
            }
        ]
        store.dispatch({ type:'POSTS_SET_DATA',payload:posts })
        expect(store.getState().posts.length).toEqual(2)
        expect(component.asFragment(component)).toMatchSnapshot()
    })
});


