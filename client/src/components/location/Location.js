import React, { Component } from 'react';
import LocationForm from './LocationForm';
import LocationList from './LocationList';
import axios from 'axios';

class Locations extends Component {
    state = { locations: [], adding: false }

    componentDidMount() {
        const { id } = this.props
        let TripId = id
        axios.get(`/api/trips/${TripId}/locations`)
        .then( res => {
            this.setState({ trips: res.data })
        })
        .catch( err => {
            console.log(err)
        })
    }
  
    toggleAdd = () => this.setState({ adding: !this.state.adding })
  
    addLocation = (location) => {
        const { id } = this.props
        let TripId = id
        axios.post(`/api/trips/${TripId}/locations`, location )
        .then( res => {
            const { locations } = this.state
            this.setState({ locations: [...locations, res.data ]})
        })
        .catch( err => {
            console.log(err)
        })
    }
  
    updateLocation = (id, location) => {
        axios.put(`/api/trips/:trip_id/locations/${id}`, location)
        .then( res => {
            const locations = this.state.locations.map( l => {
                if (l.id === id) {
                  return res.data
                }
                return l
            })
            this.setState({ locations })
        })
        .catch( err => {
            console.log(err)
        })
    }
  
    deleteTrip = (id) => {
        axios.delete(`/api/trips/:trip_id/locations/${id}`)
        .then( res => {
            const { locations } = this.state
            this.setState({ locations: locations.filter( l => l.id !== id)})
        })
        .catch( err => {
            console.log(err)
        })
    }
  
    render() {
        const { adding } = this.state
        return(
         <div className='location-page'>
         <h1 className='location-header'>Locations</h1>
          <div className='add-location'>
         {
            adding ?
            <div className='adding-location'><LocationForm addLocation={this.addLocation} toggleAdd={this.toggleAdd} /></div>
            :
            <button className='add-location-button' color='teal' onClick={this.toggleAdd}>New Location</button>
          }
          </div>
         <LocationList locations={this.state.locations} updateLocation={this.updateLocation} deleteLocation={this.deleteLocation}/>
         </div>
    )}
  }

export default Locations;