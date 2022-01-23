import React from 'react';
import { shallow } from 'enzyme';
import TransactionsTable from './transactionsTable';
describe('TransactionsTable', () => {
    const wrapperDefault = shallow(<TransactionsTable />);
    it('should render TransactionsTable', () => {
        expect(wrapperDefault.exists()).toBe(true);
    });

    it('should render TransactionsTable', () => {
        expect(wrapperDefault.find('th').at(0).text()).toBe("Título");
    });

    it('should render TransactionsTable', () => {
        expect(wrapperDefault.find('th').at(1).text()).toBe("Valor");
    });

    it('should render TransactionsTable', () => {
        expect(wrapperDefault.find('th').at(2).text()).toBe("Categoria");
    });
})