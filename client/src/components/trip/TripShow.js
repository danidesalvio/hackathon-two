import React, { Component} from 'react';
import TripForm from './TripForm';

class TripShow extends Component {
  state = { editing: false }
  toggleEdit = () => this.setState({ editing: !this.state.editing })
  render() {
    const { name, start_date, end_time } = this.props.location.state
    const { editing } = this.state
    return(
      <>
        {
          editing 
          ?
          <TripForm {...this.props.location.state} /> 
          :
          <>
            <h1>{name}</h1>
            <p>Start Date:{start_date}</p>
            <p>End Date: {end_time}</p>
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