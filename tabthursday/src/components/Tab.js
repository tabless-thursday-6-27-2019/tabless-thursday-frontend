import React from 'react';

const Tab = props => {
  console.log('From tab component', props.tab);
  return (
    <div className='tab-container'>
      <p>{props.tab.title}</p>
      <p>{props.tab.icon}</p>
      <p>{props.tab.description}</p>
    </div>
  );
};

export default Tab;
