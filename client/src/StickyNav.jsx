import React, { Component } from 'react';

class StickyNav extends Component {
    state = { isHide: false };

    hideNav = () => {
       const { isHide } = this.state

       window.scrollY < 550 ?
       !isHide && this.setState({ isHide: true })
       :
       isHide && this.setState({ isHide: false });

       this.prev = window.scrollY;
    }

    componentDidMount(){
        window.addEventListener('scroll', this.hideNav);
    }

    componentWillUnmount(){
         window.removeEventListener('scroll', this.hideNav);
    }

    render(){
        let navHide = this.state.isHide ? 'hide' : '';
        return (<div className={"stickyNav" +navHide}>
             <ul className="stickynav1">
               <li className="clickNav"> <a href="#overview"> Overview </a></li>
               <li className="clickNav"><a href="#review"> Reviews </a> </li>
               <li className="clickNav"> <a href="#location">Location </a></li>
               <li className="clickNav"><a href="#host"> The Host </a> </li>
               <li className="clickNav"><a href="#policies">Policies </a> </li>
               <div className="rightStickyNav">
               <img className="downloadIcon" src="https://i.imgur.com/ZwbKCUss.png" title="source: imgur.com" />
               <li className="clickNav"> Share</li>
               <img src="https://i.imgur.com/MNC8qnI.png" title="source: imgur.com" />
               <li className="clickNav"> Save </li>
               </div>
             </ul>
          </div>
          )
    }
}

export default StickyNav;

//referenced Stackoverflow https://stackoverflow.com/questions/38114715/how-to-reveal-a-react-component-on-scroll
