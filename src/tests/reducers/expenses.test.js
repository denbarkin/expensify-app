import expenses from "../fixtures/expenses";
import expenseReducer from "../../reducers/expenses";
import { stat } from "fs";


test('should set default state', () => {
    const state = expenseReducer(undefined, { type : '@@INIT'});
    expect(state).toEqual([]);
});

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        expense : {
            id : expenses[1].id
        } 
    }
    // dispatch the action to store 
    const state = expenseReducer(expenses, action );
    expect(state).toEqual([expenses[0],expenses[2]]);
});

test('should not remove expense by id if id is not match', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        expense : {
            id : '-1'
        } 
    }
    const state = expenseReducer(expenses, action );
    expect(state).toEqual(expenses);
});

test('should add expense', () => {
    const expense = {
        description : 'TEST', 
        note : 'TEST', 
        amount : 100, 
        createdAt : 1000
    }
    const action = {
        type: 'ADD_EXPENSE',
        expense : expense
    }
    const state = expenseReducer(expenses, action);
    expect(state).toEqual([...expenses,expense]);
})

test('should edit expense object', () => {
    const amount = 10000;
    const action = {
        type :  'EDIT_EXPENSE',
        id : expenses[1].id,
        updates : {
            amount
        }
    }
    const state = expenseReducer(expenses,action);
    expect(state[1].amount).toBe(amount)
});