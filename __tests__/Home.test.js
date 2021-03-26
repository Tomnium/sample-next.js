import React from 'react';
import { render } from '@testing-library/react';
import Home from './../pages'
import '@testing-library/jest-dom/extend-expect';


describe('Home page',() => {
    let component;

    beforeEach(() => component = render(<Home/>))

    it('should render paragraph',() => {
        expect(component.getByText(/Lorem ipsum dolor sit amet, consectetur adipisicing./i)).toBeInTheDocument()
    })

    it('should render title',() => {
        expect(component.getByText(/Hello Next.js/i)).toBeInTheDocument()
    });
})
