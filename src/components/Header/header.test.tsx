import { shallow } from 'enzyme';
import React from 'react';
import { Header } from './header';

describe('Header', () => {
    const onOpenTransactionModal = jest.fn()

    const wrapperDefault = shallow(<Header onOpenTransactionModal={onOpenTransactionModal}/>);
    it('should render Header', () => {
        expect(wrapperDefault.exists()).toBe(true);
    });

    it('should render image', () => {
        expect(wrapperDefault.find('img').exists()).toBe(true);
    });

    it('should render button', () => {
        expect(wrapperDefault.find('button').exists()).toBe(true);
    });

    it('should render correct text', () => {
        expect(wrapperDefault.find('button').text()).toBe('Nova transação');
    });
})