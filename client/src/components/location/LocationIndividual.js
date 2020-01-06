import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LocationForm from './LocationForm';

class LocationIndividual extends Component {
  state = { editing: false }

  toggleEdit = () => this.setState({ editing: !this.state.editing })

  render() {
  const { id, name, days, deleteLocation }  = this.props
  const { editing } = this.state

  return(
  <div className='location-entry'>
  {
    editing 
    ?
    <LocationForm {...this.props} toggleEdit={this.toggleEdit} updateLocation={this.props.updateLocation} deleteLocation={this.props.deleteLocation} /> 
    :
    <>
  <h3>
   <Link
    to={{
      pathname: `trips/:trip_id/locations/${id}`,
      state: { id, name, days }
    }}>
    {name}
    </Link>
    </h3>
    <p>Days in City: {days} </p>
    <button className='edit-locations' onClick={ () => this.toggleEdit() }>Edit</button>
    <button className='delete-locations' onClick={ () => deleteLocation(id) }>Delete</button>
    </>
  }
  </div>
  )
 }
}

export default LocationIndividual;