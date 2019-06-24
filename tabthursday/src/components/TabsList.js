import React from 'react';
import { connect } from 'react-redux';

class TabsList extends React.Component {
  componentDidMount() {}
  addTab = e => {
    e.preventDefault();
  };
  render() {
    return <h1>showing tabs bitchezzzzz</h1>;
  }
}

const mapStateToProps = state => {
  console.log(state);
};

export default connect(
  mapStateToProps,
  {}
)(TabsList);
