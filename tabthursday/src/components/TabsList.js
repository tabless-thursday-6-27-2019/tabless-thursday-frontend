import React from 'react';
import { connect } from 'react-redux';

class TabsList extends React.Component {
  state = {
    tabs: []
  };
  componentDidMount() {}
  addTab = e => {
    e.preventDefault();
  };
  render() {
    return (
      <div>
        <h1>showing tabs bitchezzzzz</h1>
        {this.state.tabs.map(tab => {
          return <h4>{tab.name}</h4>;
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
};

export default connect(
  mapStateToProps,
  {}
)(TabsList);
