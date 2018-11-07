import React, { Component } from 'react';

class Form extends Component {
  render () {
    return(
       <div className="full-form">
        <h2 className="book"> Book Unique Homes and Experiences. </h2>
        <form>
          <div className="where">
              <label>
                WHERE
              </label>
                 <br/>
                  <input
                      type= "text"
                      placeholder= "New York, NY, United States"
                      name="where"
                  />
           </div>
              <div className="check-in">
              <label>
                  CHECK IN
              </label>
                  <br/>
                    <input
                      type= "text"
                      placeholder= "mm/dd/yyyy"
                      name="check-in"
                      />
              </div>
              <div className="check-out">
              <label>
                CHECK OUT
              </label>
                <br/>
                  <input
                      type= "text"
                      placeholder= "mm/dd/yyyy"
                      name="check-out"
                  />
              </div>
          <div className="guests">
          <label>
            GUESTS
          </label>
             <br/>
              <input
                  type= "text"
                  placeholder= "1 guest"
                  name="guest"
              />
          </div>
          <div className="search">
          <input className="search-button" type="submit" value="Search" />
          </div>
        </form>
        </div>
      )
  }
}

export default Form;
