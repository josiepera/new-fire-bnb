import React, { Component } from 'react';
import axios from 'axios';
import Listings from './Listings';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import HeaderListings from './HeaderListings';
import './ListingsList.css'

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
       <section className="filters">
           <ul>
              <li className="filter-buttons">Dates</li>
              <li className="filter-buttons">Guests</li>
              <li className="filter-buttons">Home type</li>
              <li className="filter-buttons">Price</li>
           </ul>
       </section>
       <section>
       <img src="https://i.imgur.com/3Bdhpmu.png" title="source: imgur.com" />
       <h1 className="threehundredhomes"> +300 homes</h1>
       </section>
        {this.renderListings()}
      </div>
    )
  }
}

export default ListingsList;
