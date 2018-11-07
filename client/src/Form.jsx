import React, { Component } from 'react';

class Form extends Component {
  render () {
    return(
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
      )
  }
}

export default Form;
