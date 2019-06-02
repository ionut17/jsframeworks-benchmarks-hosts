import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.scss';

export class Nav extends Component {
    render() {
        return (
            <div id="nav">
                <NavLink to="/" exact={true} activeClassName="router-link-exact-active">Home</NavLink> |
                <NavLink to="/grid" activeClassName="router-link-exact-active">Grid</NavLink> |
                <NavLink to="/forms" activeClassName="router-link-exact-active">Forms</NavLink>
            </div>
        );
    }
}

export default Nav;