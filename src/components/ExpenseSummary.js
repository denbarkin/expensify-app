import React, { Component } from 'react';
import { connect } from "react-redux";
import getTotalExpenses from "../selectors/expenses-total";
import getCountExpenses from "../selectors/expenses-count";
import getSelectedExpenses from "../selectors/expenses";
import numeral from "numeral";


export class ExpenseSummary extends Component {
    constructor(props){
        super(props);
    }
1
    render() {
        return (
            <div>
                <h3>Number of #{this.props.count} expenses and total is {numeral(this.props.total).format('$0,0.00')}</h3>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const expenses = getSelectedExpenses(state.expenses, state.filters);

    return{ 
        count : expenses.length,
        total : getTotalExpenses(expenses)
    }
}

export default connect(mapStateToProps)(ExpenseSummary);
