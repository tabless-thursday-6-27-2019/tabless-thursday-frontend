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
        {
          this.props.tabs.map (tab => {
            return(
              <Tab tab = {tab} />
            );
          })
        }
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


// if (tab.category === category) {
//   console.log('tab', tab, category, tab.category);
//   return <Tab tab={tab} />
// }
// return<Tab tab = {tab} />

//{
          
//   this.props.categories.forEach(category => {
//   console.log('category foreach', category)
//   filtered = this.props.tabs.filter(tab => tab.category === category)
//   filtered.map(tab => {
//     console.log('TAB' ,tab);
//     return(
      
//     <Tab
//       tab = {tab}
//     />
//     )
//   })
  
// })}