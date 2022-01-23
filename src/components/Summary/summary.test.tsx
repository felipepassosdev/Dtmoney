import { shallow } from 'enzyme';
import React from 'react';
import { Summary } from './summary';

describe('Describe', () => {
    const wrapperDefault = shallow(<Summary />);
    it('should render Summary', () => {
        expect(wrapperDefault.exists()).toBe(true);
    });

    it('should render Header', () => {
        expect(wrapperDefault.find('header').exists()).toBe(true);
    });

    it('should render p', () => {
        expect(wrapperDefault.find('p').at(0).text()).toBe('Entradas');
    });

    it('should render p', () => {
        expect(wrapperDefault.find('p').at(1).text()).toBe('Saídas');
    });

    it('should render p', () => {
        expect(wrapperDefault.find('p').at(2).text()).toBe('Total');
    });
})