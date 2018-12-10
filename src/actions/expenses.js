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
    return (dispatch, getState) => {
        const {
            description = '',
            note = '',
            amount = 0,
            createdAt = 0
        } = expenseData; //destructure

        const expense = {description, note, amount,createdAt};
        const uid = getState().auth.uid;

        return database.ref(`users/${uid}/expenses`).push(expense)
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
// Asynch action return arrow function.
export const startRemoveExpense = ({id} = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/expenses/${id}`).remove().then(() => {
            dispatch(removeExpense({id}))
        })
    }
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
// Asynch action return arrow function.
export const startEditExpense = (id, updates) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/expenses/${id}`).update(updates).then(() => {
            dispatch(editExpense(id,updates));
        })
    }
}

export const setExpenses = (expenses) => (
    {
        type: 'SET_EXPENSES',
        expenses
    } 
)

// Asynchronous Redux Action with Function.
// 1. Fetch All expense data once.
// 2. Parse the data into array
// 3. Dispatch setExpenses to update store.
export const startSetExpenses = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        // 1. Fetch All expense data once.
        return database.ref(`users/${uid}/expenses`).once('value')
        .then((snapshot) => {
            // 2. Parse the data into array
            const expenses = [];
            snapshot.forEach(childsnapshot => {
                expenses.push({
                    id : childsnapshot.key,
                    ...childsnapshot.val()
                })
            });
            // 3. Dispatch setExpenses to update store.
            dispatch(setExpenses(expenses));

        }).catch((error) => {
            console.log('Error Set Expenses Asynch: ', error.message);
        })
    }
}