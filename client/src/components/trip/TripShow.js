import React from 'react';
import { Link } from 'react-router-dom';

<<<<<<< HEAD
const TripShow = ({ id, name, end_time, start_date}) => (
<>
<h2>{name}</h2>
<p>Start Date: {start_date} </p>
<p>End Date: {end_time} </p>

<Link className='locations-link' to={{
  pathname: `/trips/${id}/locations`,
  state: { id }
}}>
  Locations
</Link>
</>
=======
const TripShow = ({name, end_time, start_date}) => (
  <>
  <h2>{name}</h2>
  <p>Start Date: {start_date} </p>
  <p>End Date: {end_time} </p>
  </>
>>>>>>> b3b4cb195add4debed96b488477c6b211df277a1
)

export default TripShow;