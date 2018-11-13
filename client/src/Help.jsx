import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class Help extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
      const closeBtn = <button className="close" onClick={this.toggle}>&times;</button>;

      return (
      <div>
        <li className="login" onClick={this.toggle}>Help</li>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle} close={closeBtn}>Airbnb Help</ModalHeader>
          <ModalBody>
            <form>
             <input placeholder="Ask a question"/>
            </form>
            <h6> Suggested Articles</h6>
            <a href="https://www.airbnb.com/help/getting-started/how-it-works">Getting Started Guide </a>
            <hr/>
            <a href="https://www.airbnb.com/help/article/801/can-i-make-changes-to-a-pending-reservation-request">How is the price determined for my reservation? </a>
            <hr/>
            <a href="https://www.airbnb.com/help/article/85/how-do-i-submit-a-reservation-request">I'm a host. How do I make changes? </a>
            <hr/>
            <a href="https://www.airbnb.com/help/topic/1152/becoming-a-homes-host">How do I create an account? </a>
            <hr/>
            <a href="https://www.airbnb.com/help/topic/1120/pricing---fees">Can I pay with any currency? </a>
            <hr/>
            <p>Give feedback</p>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Done</Button>{' '}
            <hr />
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default Help;
