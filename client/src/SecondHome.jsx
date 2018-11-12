import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SecondHome extends Component{
  render(){
    return(
        <div className="second">

          <div className="one">
            <h3>Explore</h3>
            <div className="explore">
              <img className="thingstodo"  src="https://res.cloudinary.com/jperalta/image/upload/v1541800914/Screen_Shot_2018-11-09_at_4.41.00_PM.png" title="source: cloudinary.com" />
              <img className="thingstodo"  src="https://res.cloudinary.com/jperalta/image/upload/v1541800906/Screen_Shot_2018-11-09_at_4.41.26_PM.png" title="source: cloudinary.com" />
              <img className="thingstodo"  src="https://res.cloudinary.com/jperalta/image/upload/v1541867993/Screen_Shot_2018-11-10_at_11.37.16_AM.png" title="source: cloudinary.com" />
            </div>
          </div>
          <div className="two">
            <h3>Homes for any kind of trip</h3>
            <p>Find the right home for the right trip</p>
            <div className="explore">
                <img className="thingstodo" src="https://res.cloudinary.com/jperalta/image/upload/v1541998301/Screen_Shot_2018-11-11_at_11.50.46_PM.png" title="source: cloudinary.com" />
                <img className="thingstodo" src="https://res.cloudinary.com/jperalta/image/upload/v1541998315/Screen_Shot_2018-11-11_at_11.50.25_PM.png" title="source: cloudinary.com" />
            </div>
          </div>
          <div className="three">
            <div className="explore">
              <img className="thingstodo" src="https://res.cloudinary.com/jperalta/image/upload/v1541868251/Screen_Shot_2018-11-10_at_11.41.40_AM.png" title="source: cloudinary.com" />
            </div>
          </div>
        </div>
      )
  }
}

export default SecondHome;
