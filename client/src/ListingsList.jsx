import React, { Component } from 'react';
import axios from 'axios';
import Listings from './Listings';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import HeaderListings from './HeaderListings';

class ListingsList extends Component {
  state = {
      apiDataLoaded: false,
      apiData: null,
      dropdownOpen: false
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

    toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render() {
    return (
      <div className="listings-list">
       <HeaderListings/>
        {this.renderListings()}
      </div>
    )
  }
}

export default ListingsList;
