import React from 'react';

import Tab from './Tab';

class TabsByCategory extends React.Component {
  render() {
    return (
      <div>
        <h2>{this.props.category}</h2>;
        {this.props.tabs.map(tab => {
          return <Tab tab={tab} />;
        })}
      </div>
    );
  }
}

export default TabsByCategory;
