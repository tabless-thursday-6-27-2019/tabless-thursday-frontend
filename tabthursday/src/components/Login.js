import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../actions';

class Login extends React.Component {
  state = {
    creds: {
      username: '',
      password: ''
    }
  };

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
    this.props.login(this.state.creds);
    this.setState({
      creds: {
        email: '',
        password: ''
      }
    });
  };
  render() {
    return (
      <div className='login'>
        <h1>Login</h1>
        <form onSubmit={this.login}>
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
          <button>Login</button>
          <p>
            Don't have an account? <Link to='/signup'>Click Here</Link>
          </p>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoggingIn: state.isLoggingIn,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { login }
)(Login);
