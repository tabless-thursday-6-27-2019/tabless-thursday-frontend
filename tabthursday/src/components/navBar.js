import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import './navBar.scss';

const NavBar = props => {
  const token = localStorage.getItem('token');
  if (!token) {
    return (
      <div className='nav-bar'>
        <div className='container-left'>
          <img src='../assets/LockupYellow.png' alt='Tabless Logo' />
        </div>
        <div className='container-right'>
          <NavLink className='login' to='/login'>
            Login
          </NavLink>
          <NavLink className='signup' to='/signup'>
            Sign Up
          </NavLink>
        </div>
      </div>
    );
  } else {
    return (
      <div className='nav-bar loggedin'>
        <div className='container-left'>
          <img src='../assets/LockupYellow.png' alt='Tabless Logo' />
          <input name='search' type='text' />
        </div>
        <div className='continer-right'>
          <NavLink exact to='/'>
            Home
          </NavLink>
          <Link to='/'>History</Link>
          <Link to='/'>Profile</Link>
          <Link to='/'>Account</Link>
        </div>
      </div>
    );
  }
};

export default NavBar;
