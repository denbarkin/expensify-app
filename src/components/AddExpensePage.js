import ExpenseForm from "./ExpenseForm";
import { connect } from "react-redux";
import { startAddExpense } from '../actions/expenses';
import React, { Component } from 'react'

export class AddExpensePage extends Component {
  
    onSubmit = (expense) => {
        this.props.startAddExpense(expense);
        this.props.history.push('/');
    }

    render() {
    return (
      <div>
        <h1>Add Expense Form</h1>
        <ExpenseForm onSubmit = { this.onSubmit }/>  
      </div>
    )
  }
}

const mapDispatchToProp = (dispatch) => ({
    startAddExpense : (expense) => dispatch(startAddExpense(expense))
})

export default connect(undefined, mapDispatchToProp)(AddExpensePage);