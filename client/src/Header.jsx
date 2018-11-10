import React from 'react';
import { Link } from 'react-router-dom';
// import Popup from "reactjs-popup";


function Header() {
  return (
    <header>
       <nav>
        <img className="logo" src="https://i.imgur.com/P18lREH.png" title="source: imgur.com" />
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/host'>Become a Host</Link></li>
          <li><Link to='/help'> Help</Link></li>
          <li><Link to='/sign-up'> Sign Up</Link></li>
          <li><Link to='/login'>Login</Link></li>
        </ul>
      </nav>
    </header>

    )
}

export default Header;
