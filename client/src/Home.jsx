import React, { Component } from 'react';
import Form from './Form';
import Header from './Header';

class Home extends Component {
  render() {
    return(
      <div className="home">
         <Header/>
         <Form/>
      </div>
      )
  }
}

export default Home;
