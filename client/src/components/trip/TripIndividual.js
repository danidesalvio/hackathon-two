import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TripForm from '../trip/TripForm'

class TripIndividual extends Component {
  state = { editing: false }

  toggleEdit = () => this.setState({ editing: !this.state.editing })

  render() {
  const { id, name, start_date, end_time, deleteTrip }  = this.props
  const { editing } = this.state
  return(
  <div>
  {
    editing 
    ?
    <TripForm {...this.props} toggleEdit={this.toggleEdit} /> 
    :
    <>
  <h3>
   <Link
    to={{
      pathname: `/trips/${id}`,
      state: { id, name, start_date, end_time }
    }}>
    {name}
    </Link>
    </h3>
    <p>Start Date: {start_date} </p>
    <p>End Date: {end_time} </p>
    <button className='delete-trips' onClick={ () =>  this.toggleEdit() }>Edit</button>
    <button className='delete-trips' onClick={ () => deleteTrip(id) }>Delete</button>
    </>
  }
  </div>
  )
 }
}

export default TripIndividual;
