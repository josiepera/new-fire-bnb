import React, { Component } from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
import HeaderListings from './HeaderListings';
import DatePicker from "react-datepicker";
import moment from "moment";
import MapBox from "./MapBox";

import "react-datepicker/dist/react-datepicker.css";

class ListingsSingle extends Component {
  state = {
      listings: null,
      host_info: null,
      apiDataLoaded: false,
      startDate: moment(),
      endDate: moment()
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

 handleChange(date) {
    this.setState({
      startDate: date,
      endDate: date
    });
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
            <div className="single-left-side">
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
                    <p className="desc">{this.state.listings.description}</p>
                    <p className="contactHost">{this.state.listings.contact_host}</p>
                    <h6>Amenities </h6>
                    <p>{this.state.listings.amenities}</p>
                    <h6> Sleeping Arrangements </h6>
                        <div className="sleeping">
                            <img src="https://i.imgur.com/qqNgCW3.png" title="source: imgur.com" />
                            <p>{this.state.listings.sleep_arrange}</p>
                        </div>

                    <h6> Accessibility </h6>
                    <p>{this.state.listings.access}</p>
                    <h6> Availability </h6>
                    <p> Updated today </p>
                    <h6> Start Date </h6>
                    <DatePicker
                          selected={this.state.startDate}
                          onChange={()=>this.handleChange()}
                        />
                  <h6> End Date </h6>
                   <DatePicker
                          selected={this.state.endDate}
                          onChange={()=>this.handleChange()}
                          className="endDate"
                        />

                    <img className="reviews" src="https://i.imgur.com/AqTlLvS.png" title="source: imgur.com" />


                    <div className="review">
                      <span className="reviews">Reviews: {this.state.listings.reviews || 'N/A'}</span>
                    </div>
                  </div>
              <div className="host-info">
                 <h4> {this.state.host_info.host_title} </h4>
                 <h6> {this.state.host_info.host_city_location} </h6>
                 <h6> {this.state.host_info.date_joined} </h6>
                 <div className="reviewStars">
                <img src="https://i.imgur.com/0pYzIvZ.png" title="source: imgur.com" />
                 </div>
                  <p className="superhost">{this.state.host_info.superhost_or_not}</p>
                  <p> {this.state.host_info.host_description} </p>
                  <button className="contactHosts"> Contact Host </button>
                  <img className="always" src="https://i.imgur.com/a9YKoL3.png" title="source: imgur.com" />
                  <div className="map">
                     <MapBox/>
                  <p> Exact Location provided 48 hours after a booking is confirmed. </p>
                  </div>
                <h5> Policies </h5>
                 <p> {this.state.host_info.policies} </p>
                 <p> {this.state.host_info.cancellation} </p>
                 <img src="https://i.imgur.com/TrSAzLR.png" title="source: imgur.com" />

              </div>
          </div>
          <div className="single-right-side">
            <div className="stickyForm">
            <h6>{this.state.listings.price}</h6>
            <img src="https://i.imgur.com/qRZ6vly.png" title="source: imgur.com" />
            <p> Dates </p>
            <input placeholder="Check in  &#8594;  Check out"/>
            <p> Guests</p>
            <input placeholder="1 guest"/>
            <div className="form-center">
            <button className="formbooking"> Book </button>
            <p> You won't be charged yet </p>
            </div>
            <img src="https://i.imgur.com/ec7psMf.png" title="source: imgur.com" />
            </div>
            <h6 className="report-form"> Report This Listing </h6>
          </div>
          <div className="stickyNav">
             <ul>
               <li> Overview ·</li>
               <li> Reviews  ·</li>
               <li> Location · </li>
               <li> The Host ·</li>
               <li> Policies </li>
               <div className="rightStickyNav">
               <img className="downloadIcon" src="https://i.imgur.com/ZwbKCUss.png" title="source: imgur.com" />
               <li> Share</li>
               <img src="https://i.imgur.com/MNC8qnI.png" title="source: imgur.com" />
               <li> Save </li>
               </div>
             </ul>
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
