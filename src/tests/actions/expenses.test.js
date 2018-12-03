import { addExpenseV2, startAddExpense,editExpense,removeExpense, addExpense } from "../../actions/expenses";
import expenses from "../fixtures/expenses";
import database from "../../firebase/firebase";

// https://github.com/dmitry-zaets/redux-mock-store
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'

const middlewares = [thunk] // add your middlewares like `redux-thunk`
const mockStore = configureStore(middlewares)


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
    const result = addExpenseV2(expenses[2]);
    expect(result).toEqual({
        type : 'ADD_EXPENSE',
        expense : expenses[2]
    })
});

// Testing steps.
// 1. Create Mock Store to test asynch actions with test data.
// 2. Dispatch an asynch action.
// 3. Expect Dispatched Actions to equal to dispatched in the function.
// 4. Check the Database to Expense added in firebase.
test('should add expense to database and store', (done) => {
    const store = mockStore({}) // create empty store for testing.
    const expenseData = {
        description : 'Test Bill',
        amount : 1,
        note : 'This is the test note',
        createdAt : 10000
    }

    // add return here or add done function call to
    // tells to JEST the action is asynch.
    // IMPORTANT.
    store.dispatch(startAddExpense(expenseData))
    .then(() => {
        // Make assertion here.
        // Get Store Actions.
        const actions = store.getActions()
        expect(actions[0]).toEqual(addExpenseV2({
            id :expect.any(String),
            ...expenseData
        }
        ))

        // Check the data added to database.
        database.ref(`expenses/${actions[0].expense.id}`).once('value')
        .then((snapshot) => {
            expect(snapshot.val()).toEqual(expenseData);
        }).catch((error) => {
            expect(1).toBe(error);
        })
        // Forcing JEST to wait until this point of time with call done.
        done();
    })
})

test('should add expense to database and store with defaults values', () => {
    
});
