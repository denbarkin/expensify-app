import React from 'react';
import ExpenseForm from "./ExpenseForm";
import { connect } from "react-redux";
import { addExpense } from '../actions/expenses';

const AddExpensePage = (props) => (
    <div>
        <h1>Add Expense Form</h1>
        <ExpenseForm onSubmit = { ({description, note, amount,createdAt}) => {
            props.dispatch(addExpense({description, note,amount: parseFloat(amount,10)*100,createdAt : createdAt.valueOf()}));
            props.history.push('/');
        }}/>
    </div>
);

const mapStateToProps = () => {

}

export default connect()(AddExpensePage);