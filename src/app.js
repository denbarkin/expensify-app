import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import { Provider } from "react-redux";
import configureStore from './store/configureStore';
import { startSetExpenses} from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";
import './firebase/firebase';

import 'normalize.css/normalize.css'; // All Browsers Reset Defaults CSS Rendering.
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

// Redux Store Provider
const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

// Loading Screen
ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

store.dispatch(startSetExpenses()).then(() => {
    // Get DIV element from the index.html and Render <IndecisionApp> Tag.
    ReactDOM.render(jsx, document.getElementById('app'));
})
