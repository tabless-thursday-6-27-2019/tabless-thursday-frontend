import React from 'react';
import { Route, Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import NavBar from './components/navBar';
import Login from './components/Login';

import './App.css';
import SignUp from './components/signUp';
import TabsList from './components/TabsList';
import TabCard from './components/TabCard';
import UpdateForm from './components/UpdateForm';
import { deleteTab } from './actions';
import AddForm from './components/AddForm';

class App extends React.Component {
  state = {
    activeTab: null
  };

  setUpdateForm = (e, tab) => {
    e.preventDefault();
    this.setState({
      activeTab: tab
    });
    this.props.history.push('/update-form');
  };

  deleteTab = (e, id) => {
    e.preventDefault();
    this.props.deleteTab(id);
    this.props.history.push('/');
  };

  // updateTab = (e, tab) => {
  //   e.preventDefault();
  //   updateTab(tab);
  // };

  render() {
    return (
      <div className='App'>
        <NavBar />
        <Route path='/login' component={Login} />
        <Route path='/signup' component={SignUp} />
        <Route exact path='/home' component={TabsList} />
        <Route
          path='/home/:id'
          render={props => (
            <TabCard
              {...props}
              setUpdateForm={this.setUpdateForm}
              deleteTab={this.deleteTab}
              tabs={this.props.tabs}
            />
          )}
        />
        <Route
          path='/update-form'
          render={props => (
            <UpdateForm {...props} activeTab={this.state.activeTab} />
          )}
        />
        <Route path='/new-tab' component={AddForm} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loggingIn: state.loggingIn,
    error: state.error,
    tabs: state.tabs
  };
};

export default connect(
  mapStateToProps,
  { deleteTab }
)(withRouter(App));

// function App() {
//   return (
//     <div className='App'>
//       <NavBar />
//       <Route path='/login' component={Login} />
//       <Route path='/signup' component={SignUp} />
//       <Route path='/home' component={TabsList} />
//       <Route path='/home/:id' component={TabCard} />
//     </div>
//   );
// }
