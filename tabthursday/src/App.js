import React from 'react';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import NavBar from './components/navBar';
import Login from './components/Login';

import './App.css';
import signUp from './components/signUp';

//Navlink route, login route
function App() {
  return (
    <div className='App'>
      <NavBar />
      <Route path='/login' component={Login} />
      <Route path='/signup' component={SignUp} />
    </div>
  );
}

const mapStateToProps = state => {
  console.log(state);
  return {
    loggingIn: state.loggingIn,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  {}
)(App);
