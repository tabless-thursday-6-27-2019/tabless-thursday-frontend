import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import NavBar from './components/navBar';
import Login from './components/Login';

import './App.css';

//Navlink route, login route
function App() {
  return (
    <div className="App">
      <NavBar />
      <Route path = '/login' component = { Login } />
    </div>
  );
}

export default App;
