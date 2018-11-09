import React from 'react';
import { Link } from 'react-router-dom';


const Listings = (props) => {
  return (

    <div className="listings">

      <div className="pics">
      <img className="mainpic" src={props.listings.url} />
      <img className="secpic" src={props.listings.url_two} />
      <img className="thirdpic" src={props.listings.url_three} />
      </div>

      <div className="info">
      <h2 className="title">{props.listings.listing_title}</h2>
      <p className="details">🏠 {props.listings.room_specifics}</p>
      <h5 className="price">💵 {props.listings.price}</h5>
      <p className="super">🌟 {props.listings.superhost_or_not} </p>
      <Link to={`/listings/${props.listings.id}`}>👀 See More</Link>

      </div>

    </div>
  )
}



export default Listings;
