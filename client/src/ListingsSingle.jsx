import React, { Component } from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
import HeaderSingleListings from './HeaderSingleListings';
import DatePicker from "react-datepicker";
import moment from "moment";
import MapBox from "./MapBox";
import StickyNav from './StickyNav';
import StickyForm from './StickyForm';
import MoreHomes from './MoreHomes';
import MoreThings from './MoreThings';
import Footer from './Footer';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

import "react-datepicker/dist/react-datepicker.css";
import StartDate from './StartDate';

class ListingsSingle extends Component {
  constructor(props) {
    super(props);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.state = {
      listings: null,
      host_info: null,
      apiDataLoaded: false,
      selectedDay: undefined,
    }
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

      if (window.scrollY < 597) {
  window.scroll(0, 0);
}
  }

  //windowscrollY window.addEventListener in component did mount   onscroll



 handleDayClick(day, { selected, disabled }) {
    if (disabled) {
      // Day is disabled, do nothing
      return;
    }
    if (selected) {
      // Unselect the day if already selected
      this.setState({ selectedDay: undefined });
      return;
    }
    this.setState({ selectedDay: day });
  }

  renderListingsOrLoading() {
    if (this.state.apiDataLoaded) {
      return (
        <div className="single-listing">
        <HeaderSingleListings/>
          <div className="list-img">
            <img className="bigImage"
                 src={this.state.listings.url} alt={this.state.listings.listing_title} />
             <img
                className="topSmallImage"
                src={this.state.listings.url_two} alt={this.state.listings.listing_title} />
              <img
               className="bottomSmallImage"
               src={this.state.listings.url_three} alt={this.state.listings.listing_title} />
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
                    <h6> The Space </h6>
                    <p className="desc">{this.state.listings.space}</p>
                    <h6> Guest Access </h6>
                    <p className="desc">{this.state.listings.guest_access}</p>
                    <h6> Interaction </h6>
                    <p className="desc">{this.state.listings.interaction}</p>
                    <h6> Other </h6>
                    <p className="desc">{this.state.listings.other}</p>
                    <p className="contactHost">{this.state.listings.contact_host}</p>
                    <h5 className="Amenities">Amenities </h5>
                      <table>
                       <tr>
                         <td>
                         <img src="https://i.imgur.com/gsNntdM.png" title="source: imgur.com" />
                           </td>
                        <td> {this.state.listings.amenities_one}
                        </td>
                        <td>
                         <img src="https://i.imgur.com/3iJ0n8A.png" title="source: imgur.com" />
                        </td>
                        <td>
                        {this.state.listings.amenities_three}
                        </td>

                       </tr>

                       <tr>
                        <td>
                         <img src="https://i.imgur.com/uZ8Z0zU.png" title="source: imgur.com" />
                           </td>
                        <td> {this.state.listings.amenities_two}
                        </td>
                        <td>
                         <img src="https://i.imgur.com/KPS0wUn.png" title="source: imgur.com" />
                        </td>
                        <td>
                        {this.state.listings.amenities_four}
                        </td>
                       </tr>

                      </table>

                    <h5 className="Sleeping"> Sleeping Arrangements </h5>
                        <div className="sleeping">
                            <img src="https://i.imgur.com/qqNgCW3.png" title="source: imgur.com" />
                            <p>{this.state.listings.sleep_arrange}</p>
                        </div>

                    <h5 className="Accessibility"> Accessibility </h5>
                    <p>{this.state.listings.access}</p>
                    <h5 className="Availability"> Availability </h5>
                    <p> Updated today </p>
                    <div className="dates">
                    <div className="StartDate">
                        <StartDate/>
                    </div>
                    <div className="EndDate">
                        <h6> End Date </h6>
                        <div>
                        <DayPicker
                                  onDayClick={this.handleDayClick}
                                  selectedDays={this.state.selectedDay}
                                  disabledDays={{ daysOfWeek: [0, 3, 4] }}
                                />
                                {this.state.selectedDay ? (
                                  <p>You selected {this.state.selectedDay.toLocaleDateString()}</p>
                                ) : (
                                  <p>Please select a day.</p>
                                )}
                              </div>
                     </div>
                  </div>

                    <img className="reviews" src="https://i.imgur.com/AqTlLvS.png" title="source: imgur.com" />


                    <div className="review">
                     <img src="https://i.imgur.com/lYSgluF.png" title="source: imgur.com" />
                      <div className="reviews"> {this.state.listings.review_one}</div>
                      <img src="https://i.imgur.com/ZJGQT3p.png" title="source: imgur.com" />
                      <div className="reviews">{this.state.listings.review_two}</div>
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
                <h5 className="policies"> Policies </h5>
                 <p> {this.state.host_info.policies} </p>
                 <p> {this.state.host_info.cancellation} </p>
                 <img src="https://i.imgur.com/TrSAzLR.png" title="source: imgur.com" />
                 <h6 className="getFullDetails"> Get full details</h6>
                 <h4 className="manyHomes"> More homes you may like </h4>
                 <MoreHomes/>
                 <h4 className="manyThings"> Things to do near this home </h4>
                 <MoreThings/>
                 <Footer/>
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
          <StickyNav/>
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
