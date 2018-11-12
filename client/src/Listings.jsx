import React from 'react';
import { Link } from 'react-router-dom';
import { UncontrolledCarousel } from 'reactstrap';


const Listings = (props) => {

   const items = [
     {
    src: `${props.listings.url}`
  },
  {
    src: `${props.listings.url_two}`
  },
  {
    src: `${props.listings.url_three}`
  }
]

  return (

    <div className="listings">
      <UncontrolledCarousel items={items} />
      <div className="info">
      <h2 className="title">{props.listings.listing_title}</h2>
      <h6 className="price">💵 {props.listings.price}</h6>
      <p className="details">🏠 {props.listings.room_specifics}</p>
      <p className="super">🌟 {props.listings.superhost_or_not} </p>
      <Link to={`/listings/${props.listings.id}`}>Request to Book</Link>

      </div>

    </div>
  )
}



export default Listings;
