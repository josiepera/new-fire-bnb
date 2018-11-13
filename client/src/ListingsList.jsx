import React, { Component } from 'react';
import axios from 'axios';
import Listings from './Listings';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import HeaderListings from './HeaderListings';
import './ListingsList.css'
import ListingMapBox from './ListingMapBox'

class ListingsList extends Component {
  state = {
      apiDataLoaded: false,
      apiData: null,
      dropdownOpen: false,
      filter: 'all'
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
          <Listings
          key={listings.id}
          listings={listings}
          onFaveToggle={ () => this.props.onFaveToggle(listings) }

  isFave = {() => this.props.listings.includes()}/>
        );
      });
    } else return <p>Loading...</p>
  }

  handleFilterClick(filter) {
 console.log('setting filter to', filter)
 this.setState(prevState => ({
 filter
 }))
}

    toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render() {
      // const favorites = this.props.faves
    const filterall = (this.state.filter) === 'all' ? 'is-active' : ''
    const filterfaves = (this.state.filter) === 'faves' ? 'is-active' : ''
    // const filterState = (this.state.filter) === 'faves' ? 'film-list' : 'no-faves'



    return (
      <div className="listings-list">
       <HeaderListings/>
       <section className="filters">
           <ul>
              <li className="filter-buttons">Dates</li>
              <li className="filter-buttons">Guests</li>
              <li className="filter-buttons">Home type</li>
              <li className={`filter-buttons ${filterfaves}`}
        onClick={() => this.handleFilterClick('faves')}>Price</li>
              <li className="filter-buttons">Instant Book</li>
              <li className="filter-buttons">Trip Type</li>
           </ul>
       </section>
       <section className="threehundredhomes">
       <img src="https://i.imgur.com/3Bdhpmu.png" title="source: imgur.com" />
       <h3> +300 homes</h3>
       </section>
       <div className="mapwrapper">
       < ListingMapBox />

       <div className="pricebox1"> $139 </div>
       <div className="pricebox2"> $60 </div>
       <div className="pricebox3"> $100 </div>
       <div className="pricebox4"> $150 </div>
       <div className="pricebox5">  $70 </div>
       <div className="pricebox6"> $200 </div>
       </div>
        {this.renderListings()}
      </div>
    )
  }
}

export default ListingsList;
