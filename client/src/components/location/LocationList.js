import React, { Component} from 'react';
import LocationIndividual from './LocationIndividual';

class LocationList extends Component {
  render() {
    const { locations, deleteLocation, updateLocation} = this.props
    
    return(
      locations.map( t => 
        <LocationIndividual
        key={t.id}
        {...t}
        updateLocation={updateLocation}
        deleteLocation={deleteLocation}/>
      )
    )
  } 
}

export default LocationList;