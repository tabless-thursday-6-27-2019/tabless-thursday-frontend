import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../actions';

import './login.scss';

class Login extends React.Component {
  state = {
    creds: {
      email: '',
      password: ''
    }
  };

  componentDidMount() {
    this.props.email &&
      this.setState({
        creds: {
          email: this.props.email
        }
      });
  }
  handleChanges = e => {
    e.preventDefault();
    this.setState({
      creds: {
        ...this.state.creds,
        [e.target.name]: e.target.value
      }
    });
  };

  login = e => {
    e.preventDefault();
    this.props.login(this.state.creds).then(res => {
      res && this.props.history.push('/home');
    });
  };
  render() {
    return (
      <div className='login'>
            <form onSubmit={this.login}>
            <h3>Log In</h3>
            <p>
            Don't have an account? <Link to='/signup'>Sign up!</Link>
            </p>
          <input
            type='email'
            placeholder='Email'
            name='email'
            onChange={this.handleChanges}
            value={this.state.email}
          />
          <input
            type='password'
            placeholder='Password'
            name='password'
            onChange={this.handleChanges}
            value={this.state.password}
          />
          <button>Log In</button>
         
        </form>
        <div className = 'login-image'>
            <h2>Tabless Thursdays</h2>
            <h4>Best Tab Management</h4>
            <img src = '' alt = 'computer'></img>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoggingIn: state.isLoggingIn,
    error: state.error,
    email: state.email
  };
};

export default connect(
  mapStateToProps,
  { login }
)(Login);
