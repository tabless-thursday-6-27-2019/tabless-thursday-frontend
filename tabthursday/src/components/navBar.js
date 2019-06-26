import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import './navBar.scss';
import NavBarLogo from '../assets/LockupYellow.png'; 

const NavBar = props => {
  const token = localStorage.getItem('token');
  if (!token) {
    return (
      <div className='nav-bar'>
        <div className='container-left'>
          <img src= {NavBarLogo} alt='Tabless Logo' />
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
      <div className='nav-bar-loggedin'>
        <div className='container-left'>
          <img src= {NavBarLogo} alt='Tabless Logo' />
          <input
            className='searchbar'
            name='search'
            type='text'
            placeholder='Search Tabs'
          />
        </div>
        <div className='container-right'>
          <NavLink exact to='/home'>
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
