import React from 'react';
import {Router,Route, Switch} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from "../components/NotFoundPage";
import Header from '../components/Header';
import LoginPage from '../components/LoginPage'
import PrivateRoute from "../routers/PrivateRoute";
import PublicRoute from "../routers/PublicRoute";

// Note : <BrowserRouter/> has built in history functinality.
// we change to normal <Router> and add history object.
export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute path="/" component={LoginPage} exact={true} />
                <PrivateRoute path="/dashboard" component={ExpenseDashboardPage} exact={true}/>
                <PrivateRoute path="/add" component={AddExpensePage} />
                <PrivateRoute path="/edit/:id" component={EditExpensePage} exact={false}/>
                <Route path="/help" component={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;