import React from 'react';
import { render } from '@testing-library/react';
import MainLayout from './../components/MainLayout'
import '@testing-library/jest-dom/extend-expect';


describe('Layout component',() => {

    let component;

    beforeEach(() => component = render(<MainLayout>
        <span>
            Hello world;
        </span>
    </MainLayout>))

    it('should render navbar',() => {
        expect(component.container.querySelector('nav')).toBeInTheDocument()
    })

    it('should render main tag',() => {
        expect(component.container.querySelector('main')).toBeInTheDocument()
    })

    it('should render children',() => {
        expect(component.container.querySelector('span')).toBeInTheDocument();
    })

    it('should render children container',() => {
        expect(component.getByText('Hello world;')).toBeInTheDocument();
    })

})