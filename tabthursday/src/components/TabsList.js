import React from 'react';
import { connect } from 'react-redux';
import Tab from './Tab';
import { getData } from '../actions';

class TabsList extends React.Component {
  state = {
    tabs: []
  };
  componentDidMount() {
    this.props.getData();
  }
  addTab = e => {
    e.preventDefault();
  };
  render() {
    return (
      <div>
        <h1>showing tabs bitchezzzzz</h1>
        {this.props.tabs.map(tab => {
          return(
            <Tab 
              tab = {tab}
            />
          )
        })}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  tabs: state.tabs

  
});

export default connect(
  mapStateToProps,
  { getData }
)(TabsList);
