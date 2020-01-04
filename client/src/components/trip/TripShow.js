import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class TripShow  extends Component {
render() {
const { id, name, end_time, start_date } = this.props.location.state
return(
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
  )
}
}

export default TripShow;