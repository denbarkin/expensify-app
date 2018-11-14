import React from 'react';
import { shallow } from "enzyme";
import { ExpenseList } from "../../components/ExpenseList";
import expenses from "../fixtures/expenses";

// Snapshot testing with Dynamic Components 
// passing data with props
test('should render ExpenseList', () => {
    const wrapper = shallow(<ExpenseList expenses={expenses}/>);
    expect(wrapper).toMatchSnapshot();
})