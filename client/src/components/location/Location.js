import React, { Component } from 'react';
import LocationForm from './LocationForm';
import LocationList from './LocationList';
import axios from 'axios';

class Locations extends Component {
    state = { trips: [], adding: false }

    componentDidMount() {
        axios.get('/api/trips/:trip_id/locations')
        .then( res => {
            this.setState({ trips: res.data })
        })
        .catch( err => {
            console.log(err)
        })
    }
  
    toggleAdd = () => this.setState({ adding: !this.state.adding })
  
    addTrip = (trip) => {
        axios.post('/api/trips/:trip_id/locations', trip )
        .then( res => {
            const { trips } = this.state
            this.setState({ trips: [...trips, res.data ]})
        })
        .catch( err => {
            console.log(err)
        })
    }
  
    updateTrip = (id, trip) => {
        axios.put('/api/trips/:trip_id/locations/:id', trip)
        .then( res => {
            const trips = this.state.trips.map( t => {
                if (t.id === id) {
                  return res.data
                }
                return t
            })
            this.setState({ trips })
        })
        .catch( err => {
            console.log(err)
        })
    }
  
    deleteTrip = (id) => {
        axios.delete('/api/trips/:trip_id/locations/:id')
        .then( res => {
            const { trips } = this.state
            this.setState({ trips: trips.filter( t => t.id !== id)})
        })
        .catch( err => {
            console.log(err)
        })
    }
  
    render() {
        const { adding } = this.state
        return(
         <div className='trip-page'>
         <h1 className='trip-header'>Locations</h1>
          <div className='add-trip'>
         {
            adding ?
            <div className='adding-trip'><LocationForm addTrip={this.addTrip} toggleAdd={this.toggleAdd} /></div>
            :
            <button className='add-trip-button' color='teal' onClick={this.toggleAdd}>New Trip</button>
          }
          </div>
         <LocationList trips={this.state.trips} updateTrip={this.updateTrip} deleteTrip={this.deleteTrip}/>
         </div>
    )}
  }

export default Locations;