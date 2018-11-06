import React, { Component } from 'react';

class Home extends Component {
  render() {
    return(
      <div className="home">
<a href="https://imgur.com/P18lREH" className="logo"><img className="logo" src="https://i.imgur.com/P18lREH.png" title="source: imgur.com" /></a>
        <nav>
          <ul className="nav">
            <li className="host">Become a Host</li>
            <li className="help">Help</li>
            <li className="sign-up">Sign Up</li>
            <li className="login">Login</li>
          </ul>
        </nav>
      <div className="full-form">
        <h2 className="book"> Book Unique Homes and Experiences. </h2>
        <form>
          <section className="where">
              <label>
                WHERE
              </label>
                 <br/>
                  <input
                      type= "text"
                      placeholder= "New York, NY, United States"
                      name="where"
                  />
           </section>
          <section className="check-in">
          <label>
            CHECK IN
          </label>
            <br/>
              <input
                  type= "text"
                  placeholder= "mm/dd/yyyy"
                  name="check-in"
              />
          </section>
          <section className="check-out">
          <label>
            CHECK OUT
          </label>
            <br/>
              <input
                  type= "text"
                  placeholder= "mm/dd/yyyy"
                  name="check-out"
              />
          </section>
          <section className="guests">
          <label>
            GUESTS
          </label>
             <br/>
              <input
                  type= "text"
                  placeholder= "1 guest"
                  name="guest"
              />
          </section>
          <section className="search">
          <input className="search-button" type="submit" value="Search" />
          </section>
        </form>
        </div>
      </div>
      )
  }
}

export default Home;
