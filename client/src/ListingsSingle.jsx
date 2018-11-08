import React, { Component } from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
import HeaderListings from './HeaderListings';

class ListingsSingle extends Component {
  state = {
      listings: null,
      host_info: null,
      apiDataLoaded: false,
    }


  componentDidMount() {
    axios.get(`/listings/${this.props.match.params.id}`)
      .then(res => {
        this.setState({
          apiDataLoaded: true,
          listings: res.data.data,
          host_info: res.data.data,
        })
      }).catch(err => console.log(err));
  }


  renderListingsOrLoading() {
    if (this.state.apiDataLoaded) {
      return (
        <div className="single-listing">
        <HeaderListings/>
          <div className="list-img">
            <img className="bigImage"
                 src={this.state.listings.url} alt={this.state.listings.listing_title} />
             <img
                className="topSmallImage"
                src={this.state.listings.url} alt={this.state.listings.listing_title} />
              <img
               className="bottomSmallImage"
               src={this.state.listings.url} alt={this.state.listings.listing_title} />
          </div>
          <div className="listing-info">
            <h1 className="listing-title">{this.state.listings.listing_title}</h1>
            <h6 className="city-info">{this.state.listings.city_location}</h6>
            <img src="https://i.imgur.com/K8Yltrb.png" title="source: imgur.com" />
            <img src="https://i.imgur.com/QgQBvtL.png" title="source: imgur.com" />
            <p> {this.state.host_info.host_title} </p>
            <div className="room-specifics">
                <img className="guestImg" src="https://i.imgur.com/irChFNX.png" title="source: imgur.com"/>
                <p className="specifics">{this.state.listings.room_specifics}</p>
            </div>

            <p className="superhost">{this.state.listings.superhost_or_not}</p>
            <p>{this.state.listings.description}</p>
            <p className="contactHost">{this.state.listings.contact_host}</p>
            <h6>Amenities </h6>
            <p>{this.state.listings.amenities}</p>
            <h6> Sleeping Arrangements </h6>
            <p>{this.state.listings.sleep_arrange}</p>
            <p>{this.state.listings.access}</p>
            <p>{this.state.listings.price}</p>

            <div className="review">
              <span className="reviews">Reviews: {this.state.listings.reviews || 'N/A'}</span>
            </div>
          </div>
          <div className="host-info">
             <h1> This is where the host info can go </h1>
          </div>
        </div>
      )
    } else return <p className="loading">Loading...</p>
  }


  render() {
    return (
      <div className="listings-single">
        {this.renderListingsOrLoading()}
      </div>
    )
  }
}

export default ListingsSingle;
