import React from 'react';

const Tab = props => {
  console.log('From tab component', props.tab);
  return (
    <div className='tab-container'>
      <p>{props.tab.icon}</p>
      <div className='tab-info'>
        <Link to={`/home/${id}`}>
          <p>{props.tab.title}</p>
        </Link>
        <a href={props.tab.url} target='_blank'>
          <p>{props.tab.url}</p>
        </a>
      </div>
    </div>
  );
};

export default Tab;
