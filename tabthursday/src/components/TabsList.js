import React from 'react';
import { connect } from 'react-redux';
import { getData } from '../actions';

import Tab from './Tab';
import TabsByCategory from './TabsByCategory';
class TabsList extends React.Component {
  componentDidMount() {
    this.props.getData();
  }

  render() {
    return (
      <div>
        <h1>showing tabs bitchezzzzz</h1>
        {this.props.categories.map(category => {
          const filteredTabs = this.props.tabs.filter(
            tab => tab.category === category
          );
          return <TabsByCategory category={category} tabs={filteredTabs} />;
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
