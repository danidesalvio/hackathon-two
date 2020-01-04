import React, { Component } from 'react';
import TripIndividual from '../trip/TripIndividual';

class TripList extends Component {
  render() {
    const { trips, deleteTrip, updateTrip} = this.props
    var trip_list = trips.sort((a, b) => a.created_at > b.created_at).reverse()
    
    return(
      trip_list.map( t => 
        <TripIndividual
        key={t.id}
        {...t}
        updateTrip={updateTrip}
        deleteTrip={deleteTrip}/>
      )
    )
  } 
}

export default TripList;
