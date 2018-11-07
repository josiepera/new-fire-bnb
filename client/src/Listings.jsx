import React from 'react';
import { Link } from 'react-router-dom';

const Listings = (props) => {
  return (
    <div className="listings">
     <section>
      <img src={props.listings.url} />
      <h2>{props.listings_title}</h2>
      <p>{props.listings.room_specifics}</p>
      <Link to={`/listings/${props.listings.id}`}>See More</Link>
      </section>
      <section className="price-info">
      <h5>{props.listing.price}</h5>
      <p>{props.listing.superhost_or_not} </p>
      <p> {props.host_info.cancellation} </p>
      </section>
    </div>
  )
}

export default Listings;
