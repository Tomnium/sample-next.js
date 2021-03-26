import React from 'react';
import { render } from '@testing-library/react';
import Container from './../components/Container'
import '@testing-library/jest-dom/extend-expect';


describe('Container component',() => {

    let component;

    beforeEach(() => component = render(<Container>
        <span>Hello world</span>
    </Container>))

    it('should render children content',() => {
        expect(component.getByText('Hello world')).toBeInTheDocument();
    })

    it('should render children',() => {
        expect(component.container.querySelector('span')).toBeInTheDocument()
    })

})