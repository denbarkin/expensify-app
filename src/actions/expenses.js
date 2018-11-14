import uuid from 'uuid';

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