import React from 'react';
// import { Modal } from 'react-bootstrap';
import { updateTab } from '../actions';
import { connect } from 'react-redux';

class UpdateForm extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      activeTab: this.props.activeTab
    };
  }

  handleChanges = e => {
    e.preventDefault();
    this.setState({
      activeTab: {
        ...this.state.activeTab,
        [e.target.name]: e.target.value
      }
    });
  };

  updateTab = e => {
    e.preventDefault();
    this.props.updateTab(this.state.activeTab);
    this.props.history.push('/home');
  };
  render() {
    return (
      <div className='update-form-container'>
        <h4>Update Tab</h4>
        <form onSubmit={e => this.updateTab(e)}>
          <input
            type='text'
            placeholder='Enter Title'
            value={this.state.activeTab.title}
            onChange={this.handleChanges}
            name='title'
          />
          <input
            type='text'
            placeholder='Enter Description'
            value={this.state.activeTab.description}
            onChange={this.handleChanges}
            name='description'
          />
          <input
            type='text'
            placeholder='Enter URL'
            value={this.state.activeTab.url}
            onChange={this.handleChanges}
            name='url'
          />
          <select
            value={this.state.activeTab.category}
            onChange={this.handleChanges}
            name='category'
          >
            {this.props.categories.map(category => (
              <option value={category} key={category}>
                {category}
              </option>
            ))}
          </select>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categories
});

export default connect(
  mapStateToProps,
  { updateTab }
)(UpdateForm);
