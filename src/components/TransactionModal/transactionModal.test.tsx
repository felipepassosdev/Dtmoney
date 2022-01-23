import { shallow } from 'enzyme';
import TransactionModal  from './transactionModal';
import React from 'react';

describe('Describe', () => {
    const isOpen = true;
    const onRequestClose = jest.fn();

    const wrapperDefault = shallow(<TransactionModal isOpen={isOpen} onRequestClose={onRequestClose}/>);
    it('should...', () => {
        expect(wrapperDefault.exists()).toBe(true);
    });
})