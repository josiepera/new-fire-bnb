import React, { Component } from 'react';
import axios from 'axios';
import Listings from './Listings';

class ListingsList extends Component {
  state = {
      apiDataLoaded: false,
      apiData: null,
    }

 componentDidMount() {
    axios.get('/listings')
      .then(res => {
        this.setState({
          apiDataLoaded: true,
          apiData: res.data.data,
        })
      })
  }

  renderListings() {
    if (this.state.apiDataLoaded) {
      return this.state.apiData.map(listings => {
        return (
          <Listings key={listings.id} listings={listings} />
        );
      });
    } else return <p>Loading...</p>
  }

  render() {
    return (
      <div className="listings-list">
        {this.renderListings()}
      </div>
    )
  }
}

export default ListingsList;
