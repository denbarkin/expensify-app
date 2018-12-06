import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter, { history } from './routers/AppRouter';
import { Provider } from "react-redux";
import configureStore from './store/configureStore';
import { startSetExpenses} from "./actions/expenses";
import { login, logout } from "./actions/auth";
import { firebase } from './firebase/firebase';

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

// Prevent multiple time render same page with user Auth Events
let hasRendered = false;
const renderApp = () => {
   if (!hasRendered) {
        ReactDOM.render(jsx, document.getElementById('app'));
        hasRendered = true;
   } 
}
// Loading Screen
ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));
// Authentication State Events
// Gets the state of the current Auth Token.
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        console.log("Log In:", user.displayName + " logged in !");
        // Set User UID after successful login into Redux Store to get all componens when it is needed.
        store.dispatch(login(user.uid));
        
        store.dispatch(startSetExpenses()).then(() => {
           renderApp();
           // If user current location is LoginPage then redirect to Dashboard
           if (history.location.pathname === '/'){
               history.push('/dashboard');
           }
        })
    }
    else{
        console.log('User logged out !');
        store.dispatch(logout());
        renderApp();
        history.push('/');
    }
  });
