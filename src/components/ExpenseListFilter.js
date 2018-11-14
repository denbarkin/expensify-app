import React from "react";
import { connect } from "react-redux";
import { setTextFilter, sortByDate, sortByAmount, setStartDateFilter,setEndDateFilter } from "../actions/filters";
import { DateRangePicker } from "react-dates";

class ExpenseListFilter extends React.Component
{
    state = {
        focusedInput: null
    }

    onDatesChange = ({startDate, endDate}) => {
        this.props.dispatch(setStartDateFilter(startDate));
        this.props.dispatch(setEndDateFilter(endDate));
    }

    render(){
        return(
            <div>
                <input value={this.props.filters.text} onChange={ (e) => {
                        // e.target.style.backgroundColor = '#200355';
                        this.props.dispatch(setTextFilter({text:e.target.value}))
                    }
                }>
                </input>
                <select value={this.props.filters.sortBy} onChange={ (e) => {
                    e.defaultPrevented = true;
                    if (e.target.value === 'date') {
                        this.props.dispatch(sortByDate())
                    } else {
                        this.props.dispatch(sortByAmount())
                    }
                }}>
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>
                <DateRangePicker
                    startDate={this.props.filters.startDate}
                  //  startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                    endDate={this.props.filters.endDate} 
                    //endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                    onDatesChange={this.onDatesChange}
                    focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                    onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
                    showClearDates = {true}
                    isOutsideRange = {() => false}
                 />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        filters : state.filters
    }
}

export default connect(mapStateToProps)(ExpenseListFilter);