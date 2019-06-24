import React from 'react';

const Tab = (props) => {
    return(
        <div className = 'tab-container'>
        
            <p>{props.tab.title}</p>
            <p>{props.tab.icon}</p>
            <p>{props.tab.description}</p>
        </div>

    );
}

export default Tab;