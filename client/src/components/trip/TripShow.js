import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import '../css/custom.css';
import moment from 'moment';

class TripShow  extends Component {
render() {
const { id, name, end_time, start_date } = this.props.location.state
var startDate = moment(start_date).format('MMM Do YY')
var endDate = moment(end_time).format('MMM Do YY')
  
return(
<>
    <div class="image-header home">
        <h1>Your Trip</h1>
        <div class="img-overlay"></div>
    </div>
  <Container>
    <div class="your-trip">
      <h2>{name}</h2>
      <p>Start Date: {startDate} </p>
      <p>End Date: {endDate} </p>
      <h3><Link className='locations-link' to={{
        pathname: `/trips/${id}/locations`,
        state: { id }
      }}>
      View Locations Planned
      </Link></h3>
    </div>
  </Container> 
</>
  )
}
}
export default TripShow;