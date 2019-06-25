import React from 'react';
import { connect } from 'react-redux';
import Tab from './Tab';
import { getData } from '../actions';

class TabsList extends React.Component {
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
        {this.props.categories.forEach(category => {
          this.props.tabs.filter(tab => {
            if (tab.category === category) {
              console.log(tab, category, tab.category);
              return <Tab tab={tab} />;
            }
          });
        })}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  tabs: state.tabs,
  categories: state.categories
});

export default connect(
  mapStateToProps,
  { getData }
)(TabsList);
