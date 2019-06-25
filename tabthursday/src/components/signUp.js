import React from 'react';
import { connect } from 'react-redux';
import { signUp } from '../actions';

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
    this.props.signUp(this.state.creds).then(res => {
      res && this.props.history.push('/home');
    });
  };

  render() {
    return (
      <div className='signup-form'>
        <form onSubmit={this.signUp}>
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
          <button>Submit</button>
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
  { signUp }
)(SignUp);
