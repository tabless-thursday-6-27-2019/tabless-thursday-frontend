import React from 'react';

const TabCard = props => {
  return (
    <div className='tab-card-container'>
      <h1>TabCard</h1>
      <p>{props.tab.title}</p>
      <p>{props.tab.description}</p>
      <p>{props.tab.url}</p>
    </div>
  );
};

export default TabCard;
