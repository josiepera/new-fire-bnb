import React, { Component } from 'react';
import axios from 'axios';
import Listings from './Listings';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class ListingsList extends Component {
  state = {
      apiDataLoaded: false,
      apiData: null,
       dropdownOpen: false,
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
          <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle caret>
              Dropdown
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem header>Header</DropdownItem>
              <DropdownItem disabled>Action</DropdownItem>
              <DropdownItem>Another Action</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Another Action</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        {this.renderListings()}
      </div>
    )
  }
}

export default ListingsList;
