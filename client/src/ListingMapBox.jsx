import React, { Component } from 'react';
import ReactMapGL from 'react-map-gl';

let MAPBOX_TOKEN = 'pk.eyJ1Ijoic21jdXJyZXk1MjgiLCJhIjoiY2pvOWNta3l6MWQ2ZDNxcHV4cmxkeW8xaCJ9.GGx-HmSOwGAGxGGNzf6zOw'


class ListingMapBox extends Component {
   state = {
    viewport: {
      width: 650,
      height: 900,
      latitude: 40.7128,
      longitude: -73.9100,
      zoom: 11
    }
  };

  render() {
    return(
     <div>
      <div className='map'>
     <ReactMapGL
        {...this.state.viewport}
        mapStyle="mapbox://styles/mapbox/streets-v10"
        onViewportChange={(viewport) => this.setState({viewport})}
        mapboxApiAccessToken={MAPBOX_TOKEN}
      />
    </div>
      <div className='map'>
     <ReactMapGL
        {...this.state.viewportMobile}
        mapStyle="mapbox://styles/mapbox/streets-v10"
        onViewportChange={(viewportMobile) => this.setState({viewportMobile})}
        mapboxApiAccessToken={MAPBOX_TOKEN}
      />
    </div>
   </div>
   )
 }
}

export default ListingMapBox;
