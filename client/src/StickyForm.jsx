import React, { Component } from 'react';
import axios from 'axios';

class StickyForm extends Component {
    state = {
      isHide: false,
      listings: null,
      host_info: null,
       };

    hideForm = () => {
       const { isHide } = this.state

       window.scrollY < 550 ?
       !isHide && this.setState({ isHide: true })
       :
       isHide && this.setState({ isHide: false });

       this.prev = window.scrollY;
    }

  componentDidMount() {
    axios.get(`/listings/${this.props.match.params.id}`)
      .then(res => {
        this.setState({
          listings: res.data.data,
          host_info: res.data.data,
        })
      }).catch(err => console.log(err));
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
            <h6>{this.state.listings.price}</h6>
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
