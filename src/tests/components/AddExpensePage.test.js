import { shallow } from 'enzyme';
import React from 'react';
import expenses from '../fixtures/expenses';
import { AddExpensePage } from "../../components/AddExpensePage";

let startAddExpense, history, wrapper;

// Start with each test in this file.
beforeEach(()=>{
    startAddExpense = jest.fn()
    history = { push: jest.fn()}
    wrapper = shallow(<AddExpensePage startAddExpense={startAddExpense} history={history} />);
})

test('should render AddExpensePage normally', () => {
    expect(wrapper).toMatchSnapshot();
})

test('should handle onsubmit', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(history.push).toHaveBeenCalledWith('/');
    expect(startAddExpense).toHaveBeenCalledWith(expenses[1]);
})