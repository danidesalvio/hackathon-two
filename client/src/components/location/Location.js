import React, { Component } from 'react';
import axios from 'axios';

class Locations extends Component {
    state = { locations: [], trip: [] }
    componentDidMount() {
      const { id } = this.props.location.state
      let tripId = id
      axios.get(`/api/trips/${tripId}/locations`)
        .then( res => {
          this.setState({ locations: res.data })
        })
        .catch(err => {
          console.logg(err)
        })
    }

    render() {
      const { locations } = this.state
      return(
        <>
          {
            locations.map ( location =>
              <div>
                  <h1>{location.name}</h1>
                  <h2>{location.days}</h2>
              </div>
            )
          }
        </>
      )
    }
}

export default Locations;