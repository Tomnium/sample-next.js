import React from 'react';
import { render } from '@testing-library/react';
import About from './../pages/about'
import '@testing-library/jest-dom/extend-expect';


describe('About page',() => {

    it('should render about data',() => {
        const aboutData = [
            'First paragraph of about data',
            'Second paragraph of about data'
        ]
        const { getByText } = render(<About aboutData={aboutData}/>)
        expect(getByText('First paragraph of about data')).toBeInTheDocument()
        expect(getByText('Second paragraph of about data')).toBeInTheDocument()
    })

})