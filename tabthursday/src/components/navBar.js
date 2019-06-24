import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = (props) => {
    return (
        <div className = 'nav-bar'>
        <NavLink exact path = '/login'>Login</NavLink>
        <NavLink exact path = '/sign-up'>Sign Up</NavLink>
        </div>
    );
}

export default NavBar;