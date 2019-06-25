import React from 'react';
import { Link } from 'react-router-dom';

const Tab = props => {
  return (
    <div className='tab-container'>
      <p>{props.tab.icon}</p>
      <div className='tab-info'>
        <Link to={`/home/${props.tab.id}`}>
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
