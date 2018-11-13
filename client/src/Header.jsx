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

          <li className="Hlinks"><Link to='/'>Home</Link></li>
          <li className="Hlinks"><Link to='/add'>Become a Host</Link></li>
          <li className="Hlinks"><Link to='/help'> Help</Link></li>
          <li className="Hlinks"><SignUp/></li>
          <li className="Hlinks"><Login/></li>
        </ul>
      </nav>
    </header>

    )
}

export default Header;
