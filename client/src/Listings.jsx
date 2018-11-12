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
      <p> ENTIRE CONDOMINIUM </p>
      <h5 className="title">{props.listings.listing_title}</h5>


      <p className="details"> {props.listings.room_specifics}</p>
      <p> {props.listings.amenities_one}, {props.listings.amenities_two}, {props.listings.amenities_three}, {props.listings.amenities_four} </p>

      <Link to={`/listings/${props.listings.id}`}>Explore Listing</Link>

      </div>
      <div className="secondinfo">
      <h6 className="price"> {props.listings.price}</h6>
      <p className="super"> {props.listings.superhost_or_not} </p>
      <p> {props.listings.cancellation} </p>
      </div>

    </div>
  )
}



export default Listings;
