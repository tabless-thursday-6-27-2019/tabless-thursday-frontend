import React from 'react';
import Loader from 'react-loader-spinner';
import { connect } from 'react-redux';
import { getData } from '../actions';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import tabLogo from '../assets/LockupYellow.png';

import './TabCard.scss';

class TabCardModal extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      modal: true
    };
  }

  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  };
  render() {
    const id = this.props.match.params.id;
    const tab = this.props.tabs.find(tab => `${tab.id}` === id);
    if (!tab) {
      this.props.getData();
      return (
        <Loader type='TailSpin' color='#e4be4d' height={100} width={100} />
      );
    } else {
      return (
        <div>
          <Modal
            isOpen={this.state.modal}
            className='tab-card-container'
            centered
            autoFocus
          >
            <ModalHeader toggle={e => this.props.history.push('/home')}>
              <img src={tabLogo} alt='Tabless Thursday Logo' />
            </ModalHeader>
            <ModalBody>
              <p>{tab.description}</p>
              <p>{tab.url}</p>{' '}
            </ModalBody>
            <ModalFooter>
              <Button
                color='primary'
                onClick={e => this.props.setUpdateForm(e, tab)}
              >
                Update
              </Button>
              <Button
                color='secondary'
                onClick={e => this.props.history.push('/home')}
              >
                Cancel
              </Button>
              <Button onClick={e => this.props.deleteTab(e, tab.id)}>
                Delete Tab
              </Button>
            </ModalFooter>
          </Modal>
          {/* <h1>TabCard</h1>
          <p>{tab.title}</p>
          <p>{tab.description}</p>
          <p>{tab.url}</p>
          <button onClick={e => props.setUpdateForm(e, tab)}>Update</button>
          <button onClick={e => props.deleteTab(e, tab.id)}>Delete Tab</button> */}
        </div>
      );
    }
  }
}

const mapStateToProps = state => ({
  fetching: state.fetching,
  error: state.error,
  tabs: state.tabs
});
export default connect(
  mapStateToProps,
  { getData }
)(TabCardModal);
