import { shallow } from 'enzyme';
import { Dashboard } from './dashbord';
import React from 'react';
import { Summary } from 'components/Summary/summary';
import TransactionsTable from 'components/TransactionsTable/transactionsTable';

describe('Dashboard', () => {
    const wrapperDefault = shallow(<Dashboard />);
    it('should render Dashboard', () => {
        expect(wrapperDefault.exists()).toBe(true);
    });
    it('should render summary', () => {
        expect(wrapperDefault.find(Summary).exists()).toBe(true);
    });
    it('should render summary', () => {
        expect(wrapperDefault.find(TransactionsTable).exists()).toBe(true);
    });
})