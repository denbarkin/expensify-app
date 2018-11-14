import { addExpense,editExpense,removeExpense } from "../../actions/expenses";

test('should setup remove expense action object', () => {
    const result = removeExpense({ id : 'abc123'});
    expect(result).toEqual({
        type : 'REMOVE_EXPENSE',
        expense : {
            id : 'abc123'
        }
    }
    )
});

test('should setup edit expense action object', () => {
    const result  = editExpense('abc123', {
        amount : 123.12
    })
    expect(result).toEqual({
        type: 'EDIT_EXPENSE',
        id : 'abc123',
        updates : { amount : 123.12 }
    })
});

// Dynamicly created UUID() is prevent toEqual work as expected.
// so expect.any(String) can be used to assertion dynamic created fields.
test('should setup add expense with provided params', () => {
    const expenseData = {
        description : 'Rent Bill', 
        note : 'Type of Note', 
        amount : 1250, 
        createdAt : 1000
    }

    const result = addExpense(expenseData);
    expect(result).toEqual({
        type : 'ADD_EXPENSE',
        expense : {
            ...expenseData,
            id : expect.any(String)
        } 
    })
});