import React, { Component} from 'react';
import LocationIndividual from './LocationIndividual';

class LocationList extends Component {

  render() {
    const { deleteLocation, updateLocation} = this.props
    const {locations} = this.state
    
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