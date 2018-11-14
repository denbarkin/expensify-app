const expenseReducerDefaultState = [];

export default  (state = expenseReducerDefaultState, action) => {
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