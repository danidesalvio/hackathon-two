import React from 'react';
import { Link } from 'react-router-dom';

const TripIndividual = ({ id, name, start_date, end_time, deleteTrip }) => (
  <>
   <Link
    to={{
      pathname: `/trip/${id}`,
      state: { id, name, start_date, end_time }
    }}
    >
    {name}
    </Link>

    {start_date}
    {end_time}

    <button></button>
    </>
)

export default TripIndividual;
