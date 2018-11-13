import React, { Component } from 'react';
import Form from './Form';
import Header from './Header';
import SecondHome from './SecondHome';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return(
      <div>
        <div className="home">
          <Header/>
          <Form/>
        </div>
        <SecondHome />
      </div>
      )
  }
}

export default Home;
