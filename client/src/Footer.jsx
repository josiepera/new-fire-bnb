import React from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';
import SignUp from './SignUp';


function Footer() {
  return (
    <div>
       <div>
         <h3> Explore other options in and around New York</h3>
         <p> More places to stay in New York:Apartments · Houses · Bed and breakfasts · Villas · Condominiums</p>
       </div>
        <footer>
            <div>
             <h6> Airbnb </h6>
             <p> Careers </p>
             <p> Press</p>
             <p> Policies</p>
             <p> Help </p>
             <p> Diversity & Belonging</p>
            </div>

            <div>
             <h6> Discover </h6>
             <p> Trust & Safety </p>
             <p> Travel Credit</p>
             <p> Gift Cards</p>
             <p> Airbnb Citizen </p>
             <p> Business Travel </p>
              <p> Guidebooks </p>
               <p> Airbnbmag </p>
                <p> Events </p>
            </div>

            <div>
             <h6> Hosting </h6>
             <p> Hospitality </p>
             <p> Community Center</p>
             <p> Open Homes </p>
            </div>

            <div>
             <p> Terms </p>
             <p> Privacy</p>
             <p> Site Map </p>
            </div>
            <img src="https://i.imgur.com/cStFxMH.png" title="source: imgur.com" />

            <img src="https://i.imgur.com/5xNacbR.png" title="source: imgur.com" />
        </footer>
    </div>

    )
}

export default Footer;

