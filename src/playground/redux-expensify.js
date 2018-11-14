console.log("Running Redux Expensify");

import { createStore, combineReducers } from "redux";
import uuid from 'uuid';

// Add Expense
const addExpense = (
    {
        description = '', 
        note = '', 
        amount = 0, 
        createdAt = 0
    } = {}
    ) => {
    return({
        type: 'ADD_EXPENSE',
        expense :{
            id : uuid(),
            description : description,
            note,
            amount,
            createdAt
        }
    })
}

// Remove Expense
const removeExpense = ({id} = {}) => {
    return({
        type : 'REMOVE_EXPENSE',
        expense : {
            id : id
        }
    })
}

// Edit Expense
const editExpense = (id, updates ) => {
    return (
        {
            type: 'EDIT_EXPENSE',
            id,
            updates
        }
    );
}

const expenseReducerDefaultState = [];

const expenseReducer = (state = expenseReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            //return state.concat(action.expense); // returns new object.
            return [
                ...state,   // spread operator returns new array
                action.expense
            ]
        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) =>  id !== action.expense.id); 

        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates  // Updates the amount in JSON with spread operator.
                    }
                }
                else{
                    return expense;
                }
            })
        default:
            return state;
    }
}

const setTextFilter = (text = '') => {
    return({
        type : 'SET_TEXT_FILTER',
        text
    })
};

const sortByAmount = () => {
    return({
        type : 'SORT_BY_AMOUNT_FILTER'
    });
}

const sortByDate = () => {
    return({
        type : 'SORT_BY_DATE_FILTER'
    });
}

const setStartDateFilter = (startDate = 0) => {
    return({
        type : 'START_DATE_FILTER',
        startDate
    })
};

const setEndDateFilter = (endDate = 0) => {
    return({
        type : 'END_DATE_FILTER',
        endDate
    })
};

const filterReducerDefaultState = {
    text : '',
    sortBy : 'date',
    startDate : undefined,
    endDate : undefined
};

const filterReducer = (state = filterReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return({
                ...state,
                ...action.text
            })
        case 'SORT_BY_AMOUNT_FILTER':
            return({
                ...state,
                sortBy : 'amount'
            });
        case 'SORT_BY_DATE_FILTER': 
        return({
            ...state,
            sortBy : 'date'   
        });
        case 'START_DATE_FILTER':
            return({
                ...state,
                startDate : action.startDate
            }) 
        case 'END_DATE_FILTER':
            return({
                ...state,
                endDate : action.endDate
            })
        default:
            return state;
    }
};

const store = createStore(
    combineReducers({
        'expenses' : expenseReducer,
        'filters' : filterReducer
    })
)

const getVisibleExpenses = (expenses, {text,sortBy,startDate,endDate}) => {
    
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || startDate <= expense.createdAt;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = typeof text !== 'string' || expense.note.toLowerCase().includes(text);

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if (sortBy === 'date') {
           return a.createdAt < b.createdAt ? -1 : 1;
        }
        else if (sortBy === 'amount'){
            return a.amount < b.amount ? -1 : 1;
        }
    })
}

store.subscribe(() => {
    const state = store.getState();
    const visibleState = getVisibleExpenses(state.expenses,state.filters);
    console.log("Visible Expenses :");
    console.log(visibleState);  
})

const expenseOne = store.dispatch(addExpense({note: 'cafeee',amount:100, createdAt:2000}));
const expenseTwo = store.dispatch(addExpense({note: 'cake',amount:1500, createdAt : 100}));

// console.log(expenseTwo);
// store.dispatch(removeExpense({id : expenseTwo.expense.id}));
// store.dispatch(editExpense(state.expenses[0].id, {amount:19250}));
// store.dispatch(setTextFilter({text: 'Deneme'}))


store.dispatch(sortByDate());
// store.dispatch(sortByAmount());
// store.dispatch(setTextFilter({text: 'cake'}));
store.dispatch(setStartDateFilter(10));
const state = store.getState();
console.log(state);


console.log("Object rest spread operator");
// @babel/plugin-syntax-object-rest-spread"
const objectA = {
    name : 'Barkin',
    age : 25
}

const objectB = {
    street : 'Eltes',
    blok : 'A2'
}

console.log({
    ...objectA,
    town : 'Istanbul',
    adress: {
        ...objectB,
        blok: 'C' // Update blok as 'C' in spread operator object
    }
});


