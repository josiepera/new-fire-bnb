import React from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';
import SignUp from './SignUp';


function Header() {
  return (
    <header>
       <nav>
        <img className="logo" src="https://i.imgur.com/P18lREH.png" title="source: imgur.com" />
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/host'>Become a Host</Link></li>
          <li><Link to='/help'> Help</Link></li>
          <li><SignUp/></li>
          <li><Login/></li>
        </ul>
      </nav>
    </header>

    )
}

export default Header;
