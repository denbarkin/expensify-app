import { createStore,combineReducers, applyMiddleware, compose } from "redux";
import expenseReducer  from "../reducers/expenses";
import filterReducer from "../reducers/filters";
// Redux Thunk  :
// middleware allows you to write action creators that 
// return a function instead of an action. 
// The thunk can be used to delay the dispatch of an action, or 
// to dispatch only if a certain condition is met. 
// The inner function receives the store methods 
// dispatch and getState as parameters.
import thunk from 'redux-thunk'; 

// compse wrapper for middleware in order to use 
// google chrome redux add-on component in order better development tool.
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
        combineReducers({
            'expenses' : expenseReducer,
            'filters' : filterReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
        // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )

    return store;
}
