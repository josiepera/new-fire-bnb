import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

 class HeaderListings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render() {
    return (
      <React.Fragment>
        <div className="header-nav">
           <img className="head-logo" src="https://i.imgur.com/4PAHoNj.png" title="source: imgur.com" />
           <section className="dropdown menu">
            <Dropdown isOpen={this.state.dropdownOpen} toggle={() =>this.toggle()}>
              <DropdownToggle className="caret" caret>
                ^
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>Home</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Invite Friends</DropdownItem>
                <DropdownItem>Refer Hosts</DropdownItem>
                <DropdownItem>Airbnb for Work</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Host a Home</DropdownItem>
                <DropdownItem>Sign Up</DropdownItem>
                <DropdownItem>Login</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Help</DropdownItem>
              </DropdownMenu>
            </Dropdown>
            <form>
              <label>
                <div className="search-icon">
                    <svg className="search-picture">
                        <path d="m2.5 7c0-2.5 2-4.5 4.5-4.5s4.5 2 4.5 4.5-2 4.5-4.5 4.5-4.5-2-4.5-4.5m13.1 6.9-2.8-2.9c.7-1.1 1.2-2.5 1.2-4 0-3.9-3.1-7-7-7s-7 3.1-7 7 3.1 7 7 7c1.5 0 2.9-.5 4-1.2l2.9 2.8c.2.3.5.4.9.4.3 0 .6-.1.8-.4.5-.5.5-1.2 0-1.7"></path></svg>
                     <input className="search-input" type="text"  name="query" placeholder="Search" value="New York, NY"/>
                </div>
              </label>
            </form>
           </section>
        </div>
     </React.Fragment>
    );
  }
}


export default HeaderListings;

