import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class SignUp extends React.Component {
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
        <li className="signup" onClick={this.toggle}>Sign Up</li>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle} close={closeBtn}>Login</ModalHeader>
          <ModalBody>
            <form>
             <input placeholder="Email Address"/>
             <input placeholder="First Name"/>
             <input placeholder="Last Name"/>
             <input placeholder="Create a Password"/>
              <h6> Birthday </h6>
            <p> To sign up, you must be 18 or older. Other people won’t see your birthday. </p>
            <input placeholder="mm/dd/yyyy"/>
            <p> We’ll send you marketing promotions, special offers, inspiration, and policy updates via email.</p>
            </form>

          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Sign Up</Button>{' '}
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default SignUp;
