import React from 'react';
import { Link } from 'react-router-dom';

const TripIndividual = ({ id, name, start_date, end_time, deleteTrip }) => (
  <>
  <h3>
   <Link
    to={{
      pathname: `/trips/${id}`,
      state: { id, name, start_date, end_time }
    }}
    >
    {name}
    </Link>
    </h3>
    <p>Start Date: {start_date}</p>
    <p>End Date: {end_time}</p>
    <button className='delete-trips' onClick={ () => deleteTrip(id) }>Delete</button>
    </>
)

export default TripIndividual;
