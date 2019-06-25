import React from 'react';

class UpdateForm extends React.Component {
  state = {
    currentTab: ''
  };

  render() {
    return (
      <div className='update-form-container'>
        <form onSubmit={this.props.updateTab}>
          <input
            type='text'
            placeholder='Enter Title'
            value={this.state.tab.title}
            onChange={this.handleChanges}
            name='title'
          />
          <input
            type='text'
            placeholder='Enter Description'
            value={this.state.tab.description}
            onChange={this.handleChanges}
            name='description'
          />
          <input
            type='text'
            placeholder='Enter URL'
            value={this.state.tab.url}
            onChange={this.handleChanges}
            name='url'
          />
          <select value={this.state.tab.category}>
            {this.props.categories.map(category => (
              <option value={category}>{category}</option>
            ))}
          </select>
          <button>Update Tab</button>
        </form>
      </div>
    );
  }
}

export default UpdateForm;
