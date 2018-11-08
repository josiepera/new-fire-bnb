import React from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import HeaderListings from './HeaderListings';

const Listings = (props) => {
  return (
    <div className="listings">
   <HeaderListings/>
     <section className="filters">
         <ul>
            <li className="filter-buttons">Dates</li>
            <li className="filter-buttons">Guests</li>
            <li className="filter-buttons">Home type</li>
            <li className="filter-buttons">Price</li>
         </ul>
     </section>
     <section>
     <img src="https://i.imgur.com/3Bdhpmu.png" title="source: imgur.com" />
     <h1 className="threehundredhomes"> +300 homes</h1>
     </section>
     <section>
      <img src={props.listings.url} />
      <h2>{props.listings_title}</h2>
      <p>{props.listings.room_specifics}</p>
      <Link to={`/listings/${props.listings.id}`}>See More</Link>
      
      <section className="price-info">
      <h5>{props.listings.price}</h5>
      <p>{props.listings.superhost_or_not} </p>

      </section>
    </div>
  )
}

export default Listings;
