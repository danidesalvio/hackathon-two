import React, { Component} from 'react';
import LocationIndividual from './LocationIndividual';

class LocationList extends Component {

  render() {
    const { locations, deleteLocation, updateLocation} = this.props
    
    return(
      locations.map( l => 
        <LocationIndividual
        key={l.id}
        {...l}
        updateLocation={updateLocation}
        deleteLocation={deleteLocation}/>
      )
    )
  } 
}

export default LocationList;