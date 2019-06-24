import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'http2';

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
  };
  render() {
    return (
      <div className='login'>
        <form>
          <input
            type='email'
            palceholder='Email'
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
  console.log(state);
  return {
    loggingIn: state.loggingIn,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  {}
)(Login);
