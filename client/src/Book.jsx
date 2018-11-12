import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Link } from 'react-router-dom';

class Book extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      nestedModal: false,
      closeAll: false
    };

    this.toggle = this.toggle.bind(this);
    this.toggleNested = this.toggleNested.bind(this);
    this.toggleAll = this.toggleAll.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  toggleNested() {
    this.setState({
      nestedModal: !this.state.nestedModal,
      closeAll: false
    });
  }

  toggleAll() {
    this.setState({
      nestedModal: !this.state.nestedModal,
      closeAll: true
    });
  }

  render() {
    return (
      <div>
        <Button color="danger" className="formbooking" onClick={this.toggle}> Book </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Confirm your booking</ModalHeader>
          <ModalBody>
            When a host accepts your request, you'll receive an email and, depending on your account notification settings, a text (SMS) and push notification from Airbnb. Your reservation request status will also change to Accepted.
            <br />
            <Button color="success" onClick={this.toggleNested}>Confirm Booking</Button>
            <Modal isOpen={this.state.nestedModal} toggle={this.toggleNested} onClosed={this.state.closeAll ? this.toggle : undefined}>
              <ModalHeader>Booking Confirmed</ModalHeader>
              <ModalBody>Thanks for booking with Airbnb! You will recieve a text when the Host confirms.</ModalBody>
              <ModalFooter>
                <Button color="secondary" onClick={this.toggleAll}><Link className="done" to='/'>Done</Link></Button>
              </ModalFooter>
            </Modal>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default Book;
