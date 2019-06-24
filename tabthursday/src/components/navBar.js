import React from 'React';
import { NavLink } from 'react-router-dom';

const NavBar = (props) => {
    return (
        <div>
        <NavLink exact path = '/login'>Login</NavLink>
        <NavLink exact path = '/sign-up'>Sign Up</NavLink>
        </div>
    );
}

export default NavBar;