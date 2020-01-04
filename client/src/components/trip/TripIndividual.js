import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TripForm from '../trip/TripForm'
import moment from 'moment';

class TripIndividual extends Component {
  state = { editing: false }

  toggleEdit = () => this.setState({ editing: !this.state.editing })

  render() {
  const { id, name, start_date, end_time, deleteTrip }  = this.props
  const { editing } = this.state
  var startDate = moment(start_date).format('MMM Do YY') 
  var endDate = moment(end_time).format('MMM Do YY')

  return(
  <div className='trip-entry'>
  {
    editing 
    ?
    <TripForm {...this.props} toggleEdit={this.toggleEdit} updateTrip={this.props.updateTrip}/> 
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
    <p>Start Date: {startDate} </p>
    <p>End Date: {endDate} </p>
    <button className='edit-trips' onClick={ () => this.toggleEdit() }>Edit</button>
    <button className='delete-trips' onClick={ () => deleteTrip(id) }>Delete</button>
    </>
  }
  </div>
  )
 }
}

export default TripIndividual;
