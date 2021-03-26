import React from 'react';
import { render } from '@testing-library/react';
import Post from './../pages/posts/[id]';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import '@testing-library/jest-dom/extend-expect';
import * as nextRouter from 'next/router';
import { reducer } from './../store';

nextRouter.useRouter = jest.fn();
nextRouter.useRouter.mockImplementation(() => ({
    route: '/',
    query:{
        id:'1',
    }
}));



describe('Post page',() => {
    it('renders post info',() => {
        const posts = [
            {
                id:'1',
                title:'Title of first post',
                body:'Body of first post',
                userId:5,
            },
            {
                id:'2',
                title:'Title of second post',
                body:'Body of second post',
                userId:2,
            }
        ]
        const store = createStore(reducer,{ posts })
        const { getByText } = render(
            <Provider store={store}>
                <Post/>
            </Provider>
        )
        expect(getByText(/Post 1/i)).toBeInTheDocument();
        expect(getByText(/Title of first post/i)).toBeInTheDocument();
        expect(getByText(/Body of first post/i)).toBeInTheDocument();
    })

})