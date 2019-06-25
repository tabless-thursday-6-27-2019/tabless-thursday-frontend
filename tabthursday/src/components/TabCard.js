import React from 'react';

const TabCard = props => {
  const id = props.match.params.id;
  const tab = props.tabs.find(tab => `${tab.id}` === id);
  return (
    <div className='tab-card-container'>
      <h1>TabCard</h1>
      <p>{tab.title}</p>
      <p>{tab.description}</p>
      <p>{tab.url}</p>
      <button onClick={e => props.setUpdateForm(e, tab)}>Update</button>
      <button onClick={e => props.deleteTab(e, tab.id)}> Delete Tab </button>
    </div>
  );
};

export default TabCard;
