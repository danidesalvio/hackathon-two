import React, { Component} from 'react';
import TripForm from './TripForm';
import moment from 'moment';

class TripShow extends Component {
  state = { editing: false }

  toggleEdit = () => this.setState({ editing: !this.state.editing })

  render() {
    const { name, start_date, end_time } = this.props.location.state
    const { editing } = this.state
    var startDate = moment(start_date).format('MMM Do YY')
    var endDate = moment(end_time).format('MMM Do YY')
    
    return(
      <>
        {
          editing 
          ?
          <TripForm {...this.props.location.state} /> 
          :
          <>
            <h1>{name}</h1>
            <p>Start Date: {startDate} </p>
            <p>End Date: {endDate} </p>
            <button onClick={ () => this.toggleEdit() }>
              Edit Dates
            </button>
          </>
        }
      </>
    )
  }
}

export default TripShow;