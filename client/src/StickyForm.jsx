import React, { Component } from 'react';
import axios from 'axios';

class StickyForm extends Component {
    state = {
      isHide: false,
       };

    hideForm = () => {
       const { isHide } = this.state

       window.scrollY > 4009 ?
       !isHide && this.setState({ isHide: true })
       :
       isHide && this.setState({ isHide: false });

       this.prev = window.scrollY;
    }

  componentDidMount() {
      window.addEventListener('scroll', this.hideForm);
}

    componentWillUnmount() {
         window.removeEventListener('scroll', this.hideForm);
    }

    render(){
        let formHide = this.state.isHide ? 'hide' : '';
        return (
              <div className={"single-right-side" +formHide}>
            <div className="stickyForm">
            <h6>$60 per night</h6>
            <img src="https://i.imgur.com/qRZ6vly.png" title="source: imgur.com" />
            <p> Dates </p>
            <input placeholder="Check in  &#8594;  Check out"/>
            <p> Guests</p>
            <input placeholder="1 guest"/>
            <div className="form-center">
            <button className="formbooking"> Book </button>
            <p> You won't be charged yet </p>
            </div>
            <img src="https://i.imgur.com/ec7psMf.png" title="source: imgur.com" />
            </div>
            <h6 className="report-form"> Report This Listing </h6>
          </div>
          )
    }
}

export default StickyForm;
