import { shallow } from 'enzyme';
import React from 'react';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';

// mocking moment library 

test('should render Expense Form Correctly', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseForm with Data', () => {
    const wrapper = shallow(<ExpenseForm expense={{...expenses[1]}} />);
    expect(wrapper).toMatchSnapshot();
});

// wrapper find form element and the simulate submit event with e.preventDefault object.
// then check the state if it is include error in the state.
// this is enzyme function to simulate events.
test('should render Expense Form with error for invalid submission', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('form').simulate('submit', {
        preventDefault : () => { }
    })
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
});

test('should set description on input change', () => {
    const value = 'New Decsription'
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(0).simulate('change', {
        target : { value }
    })
    expect(wrapper.state('description')).toBe(value)
});

test('should set note on textarea change', () => {
    const value = 'New Note'
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('textarea').simulate('change', {
        target : { value }
    })
    expect(wrapper.state('note')).toBe(value)
});

// Mocking functions also called SPY functions.
// function of spy is create fake functions for test.
test('should call onSubmit prop for valid form submission', () => {
    let onSubmitSpy = jest.fn() // Jest Spy function make assertions on it.
    const wrapper = shallow(<ExpenseForm 
                                expense={expenses[0]} 
                                onSubmit= {onSubmitSpy} 
                            />);
    wrapper.find('form').simulate('submit', {
        preventDefault : () => { }
    })
    expect(wrapper.state('error')).toBe('');
    // expect(onSubmitSpy).toHaveBeenLastCalledWith({
    //     description : expenses[0].description,
    //     amount: expenses[0].amount,
    //     note : expenses[0].note,
    //     createdAt : expenses[0].createdAt
    // })
});