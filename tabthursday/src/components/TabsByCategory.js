import React from 'react';

import Tab from './Tab';

class TabsByCategory extends React.Component {
  render() {
    return (
      <div className='category-container'>
        <h2>{this.props.category}</h2>;
        {this.props.tabs.map(tab => {
          return <Tab tab={tab} key={tab.id} />;
        })}
        <div>Add new tab</div>
      </div>
    );
  }
}

export default TabsByCategory;
