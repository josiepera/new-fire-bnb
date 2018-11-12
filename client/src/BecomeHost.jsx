import React, { Component } from 'react';

import axios from 'axios';

import { Redirect } from 'react-router-dom';
import Header from './Header';

class BecomeHost extends Component {
  constructor() {
    super();
    this.state = {
      flavor: '',
      desc: '',
      rating: '',
      brand: '',
      url: '',
      fireRedirect: false,
    };
  }
//this handes onSubmit input
  handleInputChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value,
    });
  }
//on click submit button
  handleFormSubmit(e) {
    e.preventDefault();
    axios
      .post('/listings', {
        listing_title: this.state.listing_title,
        description: this.state.description,
        price: this.state.price,
        city_location: this.state.city_location,
        url: this.state.url,
      })
      .then(res => {
        console.log(res);
        this.setState({
          newId: res.data.data.id,
          fireRedirect: true,
        });
      })
      .catch(err => console.log(err));
    e.target.reset();
  }

  render() {
    return (
      <div>
      <Header/>
      <div className="add">
        <form className="becomeHost" onSubmit={(e) => this.handleFormSubmit(e)}>
         <h3> Become a Host </h3>
         <h6> Enter your listing information below </h6>
          <label>
            Listing Title
            <input
              type="text"
              placeholder="Listing Title"
              name="flavor"
              value={this.state.listing_title}
              onChange={(e) => this.handleInputChange(e)}
            />
          </label>
          <label>
            Description
            <input
              type="text"
              placeholder="Description"
              name="desc"
              value={this.state.description}
              onChange={(e) => this.handleInputChange(e)}
            />
          </label>
          <label>
            Price
            <input
              type="number"
              placeholder="Price"
              name="price"
              value={this.state.price}
              onChange={(e) => this.handleInputChange(e)}
            />
          </label>
          <label>
            City Location
            <input
              type="text"
              placeholder="City Location"
              name="city_location"
              value={this.state.city_location}
              onChange={(e) => this.handleInputChange(e)}
            />
          </label>
          <label>
            URL
            <input
              type="text"
              placeholder="URL"
              name="url"
              value={this.state.url}
              onChange={(e) => this.handleInputChange(e)}
            />
          </label>
          <input className="hostSubmit" type="submit" value="Submit!" />
        </form>
        {this.state.fireRedirect
          ? <Redirect push to={`/listings/${this.state.newId}`} />
          : ''}
      </div>
      </div>
    );
  }
}

export default BecomeHost;
