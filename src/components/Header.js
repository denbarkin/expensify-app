import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <div>
            <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
            <NavLink to="/add" activeClassName="is-active">Add Expense</NavLink>
            <NavLink to="/help" activeClassName="is-active">Help</NavLink>
        </div>
    </header>
);

export default Header;