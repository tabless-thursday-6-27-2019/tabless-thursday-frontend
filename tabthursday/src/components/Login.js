import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../actions';

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
    error: state.error,
    email: state.email
  };
};

export default connect(
  mapStateToProps,
  { login }
)(Login);
