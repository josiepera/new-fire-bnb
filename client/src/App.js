import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import Header from './Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Button } from 'reactstrap';
import ListingsList from './ListingsList';
import ListingsSingle from './ListingsSingle';
import BecomeHost from './BecomeHost';

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/listings" component={ListingsList} />
            <Route exact path="/listings/:id" component={ListingsSingle} />
            <Route exact path="/add" component={BecomeHost} />
          </Switch>
         </React.Fragment>
      </Router>
    );
  }
}

export default App;
