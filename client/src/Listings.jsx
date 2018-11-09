import React from 'react';
import { Link } from 'react-router-dom';


const Listings = (props) => {
  return (

    <div className="listings">

      <img className="pic" src={props.listings.url} />

      <div className="info">
      <h2 className="title">{props.listings.listing_title}</h2>
      <p className="details">🏠 {props.listings.room_specifics}</p>
      <h6 className="price">💵 {props.listings.price}</h6>
      <p className="super">🌟 {props.listings.superhost_or_not} </p>
      <Link to={`/listings/${props.listings.id}`}>Request to Book</Link>

      </div>

    </div>
  )
}



export default Listings;
