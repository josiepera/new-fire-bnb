import React, { Component } from 'react';

import axios from 'axios';


class Form extends Component {
  state = {
    cityLocation: ''
  };

  handleInputChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value,
    });
  }

  handleFormSubmit(e) {
    e.preventDefault();
    axios
      .get('/listings', {
        cityLocation: this.state.city_location
      })
      .then(res => {
        console.log(res);
        this.setState({
          newId: res.data.data.id
        })
      })
      .catch(err => console.log(err));
      e.target.reset();
  }



  render () {
    return(
       <div className="full-form">
        <h2 className="book"> Book Unique Homes and Experiences. </h2>
        <form onSubmit={(e) => this.handleFormSubmit(e)}>
          <section className="where">
              <label>
                WHERE
              </label>
                 <br/>
                  <input
                      type= "text"
                      placeholder= "New York, NY, United States"
                      name="where"
                      value={this.state.city_location}
                      onChange={(e) => this.handleInputChange(e)}
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
