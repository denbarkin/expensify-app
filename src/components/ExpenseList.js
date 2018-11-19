import { connect } from "react-redux";
import React from "react";
import ExpenseListItem from "./ExpenseListItem";
import selectedExpenses from "../selectors/expenses";
import getTotalExpenses from "../selectors/expenses-total";
import getCountExpenses from "../selectors/expenses-count";
import ExpenseListFilter from "./ExpenseListFilter";
import ExpenseSummary from "./ExpenseSummary";

export const ExpenseList = (props) => (
    <div>
        <h1>Expense List</h1>
        <ExpenseListFilter />
        <ExpenseSummary expenses={props.expenses} />
        {props.expenses.map((expense) => {
           return <ExpenseListItem key={expense.id} {...expense} />
        })}
    </div>
);

const mapStateToProps = (state) => {
    return {
      expenses : selectedExpenses(state.expenses,state.filters)
    };
};  

// HOC returns with connect overrided ExpenseList.
export default connect(
    mapStateToProps
  )(ExpenseList);
