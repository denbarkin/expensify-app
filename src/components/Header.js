import React from 'react';
import { connect } from "react-redux";
import { startLogout } from "../actions/auth";
import { NavLink } from 'react-router-dom';

export const Header = (props) => (
    <header>
        <h1>Expensify</h1>
        <div>
            <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
            <NavLink to="/add" activeClassName="is-active">Add Expense</NavLink>
            <NavLink to="/help" activeClassName="is-active">Help</NavLink>
            <button onClick={props.startLogout}>Logout</button>
        </div>
    </header>
);

const mapDispatchToProps = (dispatch) => ({
    startLogout : () => dispatch(startLogout())
})

export default connect(undefined, mapDispatchToProps)(Header);