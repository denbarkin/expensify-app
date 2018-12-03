import React from "react";
import moment from "moment";
import { SingleDatePicker } from 'react-dates';


export default class ExpenseForm extends React.Component
{
    constructor(props){
        super(props)

        this.state = {
            description : props.expense ?  props.expense.description : '',
            amount : props.expense ?  props.expense.amount : 0,
            note : props.expense ?  props.expense.note : '',
            createdAt: props.expense ?  moment(props.expense.createdAt) : moment(),
            calenderFocused : false,
            error : ''
        }
    } 

    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({description}))
    }

    onAmountChange = (e) => {
        const amount = e.target.value;
        // regex101.com for detailed regex 
        if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/))
        {   
            this.setState(() => ({amount}))
        }
    }

    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({note}))
    }

    onDateChange = (createdAt) => {
        if (createdAt) {
            this.setState(() => ({ createdAt })) 
        }  
    }

    onFocusChange = ({focused}) => {
        this.setState(() => ({ calenderFocused : focused }))
    }

    onSubmitHandler = (e) => {
        e.preventDefault();

        let error = '';
        if (!this.state.description || !this.state.amount) {
            // Error log
            error = 'Description and Amount must be valid.'
            this.setState(() => ({ error }));
        } else {
            // Clear Error Log 
            error = '';
            this.setState(() => ({error}))
            this.props.onSubmit({
                description : this.state.description,
                note : this.state.note,
                amount : this.state.amount,
                createdAt : this.state.createdAt.valueOf()
            });
        }
    }
    
    render(){
        return(
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmitHandler}>
                    <input 
                        type='text'
                        placeholder="description"
                        value={this.state.description}
                        autoFocus
                        onChange={this.onDescriptionChange}
                    />
                    <input 
                        type='text'
                        placeholder='amount'
                        value = {this.state.amount}
                        onChange={this.onAmountChange}
                    />
                    <SingleDatePicker 
                        date = {this.state.createdAt}
                        onDateChange = {this.onDateChange}
                        onFocusChange = {this.onFocusChange}
                        focused = {this.state.calenderFocused}
                        numberOfMonths = {1}
                        isOutsideRange = { () => false}
                    />
                    <textarea 
                        type='text'
                        value = {this.state.note}
                        placeholder='Notes for the expense'
                        onChange={this.onNoteChange}
                    />
                    <button type='submit'>Add Expense</button>
                </form>  
            </div>
        )
    }
}
