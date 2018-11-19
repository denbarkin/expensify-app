import React, { Component } from 'react';
import getTotalExpenses from "../selectors/expenses-total";
import getCountExpenses from "../selectors/expenses-count";
import numeral from "numeral";


export class ExpenseSummary extends Component {
    constructor(props){
        super(props);
        this.total = getTotalExpenses(props.expenses);
        this.count = getCountExpenses(props.expenses);
    }

    render() {
        return (
            <div>
                <p>Number of #{this.count} expenses total is {numeral(this.total).format('$0,0.00')}</p>
            </div>
        )
    }
}

export default ExpenseSummary
