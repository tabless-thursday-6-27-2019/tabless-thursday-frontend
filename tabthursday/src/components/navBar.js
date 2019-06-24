import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = (props) => {
    return (
        <div className = 'nav-bar'>
        <NavLink to = '/login'>Login</NavLink>
        <NavLink to = '/sign-up'>Sign Up</NavLink>
        </div>
    );
}

export default NavBar;