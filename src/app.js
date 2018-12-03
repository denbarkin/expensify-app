import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import { Provider } from "react-redux";
import configureStore from './store/configureStore';
import { addExpense, editExpense, removeExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";
import './firebase/firebase';

import 'normalize.css/normalize.css'; // All Browsers Reset Defaults CSS Rendering.
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

// store.dispatch(addExpense({
//     description : 'Gas Bill'
// }))

// store.dispatch(addExpense({
//     description : 'Water Bill',
//     note : 'Water Bill',
//     amount : 55000,
//     createdAt : Date.now()
// }))

// store.dispatch(addExpense({
//     description : 'ExTra Bill',
//     note : 'ExTra Bill',
//     amount : 1000,
//     createdAt : Date.now() + 100
// }))


// const state = store.getState();

// setTimeout(() => {
//     store.dispatch(addExpense({
//         description : 'ExTra Bill',
//         note : 'ExTra Bill',
//         amount : 10000,
//         createdAt : Date.now()
//     }))
// }, 3000);

// store.dispatch(setTextFilter({text : 'Water'}));

// setTimeout(() => {
//     store.dispatch(setTextFilter({text:'Gas'}))
// }, 3000);

// console.log(state);

// Redux Store Provider
const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

// Get DIV element from the index.html and Render <IndecisionApp> Tag.
ReactDOM.render(jsx, document.getElementById('app'));