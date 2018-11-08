import React from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';



function HeaderListings() {
  return (
    <React.Fragment>
     <img src="https://i.imgur.com/4PAHoNj.png" title="source: imgur.com" />
     <section className="dropdown menu">
         <Dropdown >
        <DropdownToggle caret>
          ^
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Home</DropdownItem>
          <DropdownItem disabled>Invite friends</DropdownItem>
          <DropdownItem disabled>Airbnb for Work</DropdownItem>
          <DropdownItem>Refer hosts</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Host a Home</DropdownItem>
          <DropdownItem>Sign Up</DropdownItem>
          <DropdownItem>Login</DropdownItem>
          <DropdownItem>Help</DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <form>
        <label>
          <div className="search-icon">
              <svg className="search-picture">
                  <path d="m2.5 7c0-2.5 2-4.5 4.5-4.5s4.5 2 4.5 4.5-2 4.5-4.5 4.5-4.5-2-4.5-4.5m13.1 6.9-2.8-2.9c.7-1.1 1.2-2.5 1.2-4 0-3.9-3.1-7-7-7s-7 3.1-7 7 3.1 7 7 7c1.5 0 2.9-.5 4-1.2l2.9 2.8c.2.3.5.4.9.4.3 0 .6-.1.8-.4.5-.5.5-1.2 0-1.7"></path></svg>
               <input type="text"  name="query" placeholder="Search" value="New York, NY"/>
          </div>
        </label>
      </form>
     </section>
    </React.Fragment>

    )
}

export default HeaderListings;
