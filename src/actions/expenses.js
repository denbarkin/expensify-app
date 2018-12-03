import uuid from 'uuid';
import database from '../firebase/firebase'; // imports default exports.

// Add Expense
export const addExpense = (
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

export const addExpenseV2 = (expense) => {
    return({
        type: 'ADD_EXPENSE',
        expense 
    })
}

// Asynchronous Redux Action with Function.
// "redux-thunk": "^2.3.0", is used to send function to Redux Action.
export const startAddExpense = (expenseData = {}) => {
    return (dispatch) => {
        const {
            description = '',
            note = '',
            amount = 0,
            createdAt = 0
        } = expenseData; //destructure

        const expense = {description, note, amount,createdAt};

        return database.ref('expenses').push(expense)
            .then((ref) => {
                dispatch(addExpenseV2({
                    id : ref.key,
                    ...expense
                }))
            })
            .catch((e) => {
                console.log("Error:", e.message); 
            })
    }
}

// Remove Expense
export const removeExpense = ({id} = {}) => {
    return({
        type : 'REMOVE_EXPENSE',
        expense : {
            id : id
        }
    })
}

// Edit Expense
export const editExpense = (id, updates ) => {
    return (
        {
            type: 'EDIT_EXPENSE',
            id,
            updates
        }
    );
}