import React, { Component } from 'react';
import Form from './Form';

class Home extends Component {
  render() {
    return(
      <div className="home">
<a href="https://imgur.com/P18lREH" className="logo"><img className="logo" src="https://i.imgur.com/P18lREH.png" title="source: imgur.com" /></a>
        <nav>
          <ul className="nav">
            <li className="host">Become a Host</li>
            <li className="help">Help</li>
            <li className="sign-up">Sign Up</li>
            <li className="login">Login</li>
          </ul>
        </nav>
         <Form/>
      </div>
      )
  }
}

export default Home;
