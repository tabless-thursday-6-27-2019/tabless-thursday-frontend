import React from 'react';
import { connect } from 'react-redux';

class SignUp extends React.Component {
  state = {
    creds: {
      email: '',
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

  signUp = e => {
    e.preventDefault();
  };

  render() {
    return (
      <div className='signup-form'>
        <form>
          <h1>Sign Up</h1>
          <input
            type='email'
            placeholder='Email'
            value={this.state.email}
            onChange={this.handleChanges}
            name='email'
          />
          <input
            type='password'
            placeholder='Password'
            value={this.state.password}
            onChange={this.handleChanges}
            name='password'
          />
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoggingIn: state.isLoggingIn,
  error: ''
});

export default connect(
  mapStateToProps,
  {}
)(SignUp);
