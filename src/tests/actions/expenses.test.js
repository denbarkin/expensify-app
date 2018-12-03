import { 
    addExpenseV2, 
    startAddExpense,
    editExpense,
    removeExpense,
    startRemoveExpense,
    addExpense, 
    setExpenses,
    startSetExpenses } from "../../actions/expenses";
import expenses from "../fixtures/expenses";
import database from "../../firebase/firebase";

// https://github.com/dmitry-zaets/redux-mock-store
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'

const middlewares = [thunk] // add your middlewares like `redux-thunk`
const mockStore = configureStore(middlewares)

beforeEach((done) => {
    const expenseData = {};
    expenses.forEach(({id, description,amount,note,createdAt}) => {
        expenseData[id] = { description, amount, note, createdAt};
    });

    database.ref('expenses').set(expenseData).then(() => done());
})

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
// 1. Create Mock test store
// 2. Grap an expense
// 3. dispatch asynch action to store that removes object from firebase
// 4. Assert store has the action REMOVE_EXPENSE
// 5. Assert record removed from firebase db.
// 6. Call done() to finalize asynch test.
test('should remove expense from firebase', (done) => {
    const store = mockStore({});
    const id = expenses[2].id;
    store.dispatch(startRemoveExpense({ id : id })).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'REMOVE_EXPENSE',
            expense : {
                id : id
            }
        })
        // Check firebase test db to record removed from it.
        database.ref(`expenses/${id}`).once('value').then((snapshot) => {
            expect(snapshot.val()).toBeFalsy();
            done();
        })
    });
})


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
            // Forcing JEST to wait until this point of time with call done.
            done();
        }).catch((error) => {
            expect(1).toBe(error);
        })
    })
})

test('should setup set expense action with data', () => {
    const action = setExpenses(expenses);
    expect(action).toEqual({
        type: 'SET_EXPENSES',
        expenses
    })
})

// test('should feth the expenses from firebase', (done) => {
//     const store = mockStore({});

//     store.dispatch(startSetExpenses()).then(() => {
//         const actions = store.getActions();
//         expect(actions[0]).toEqual({
//             type: 'SET_EXPENSES',
//             expenses
//         });
//         done();
//     })
// })


