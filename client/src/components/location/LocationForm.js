import React, { Component } from 'react';


class LocationForm extends Component {
  state = { 
    name: '', 
    days: 0
  }

  componentDidMount() {
    if (this.props.id) {
      const { name, days } = this.props
      this.setState({ name, days })
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if (this.props.id) {
      this.props.updateLocation(this.props.id, this.state)
      this.props.toggleEdit() 
    } 
    else {
      this.props.addLocation(this.state)
      this.props.toggleAdd()
    }
    this.setState({ name: '', days: 0 })
  }

  render() {
    const { name, days } = this.state
    return(
      <div className='location-form'>
      <form onSubmit={this.handleSubmit}>
       <div className='name'>
         <label for="name"> Name </label>
          <input type="text" name={name} id="name"/>
        </div>
        <div className='days'>
          <label for="days"> Start Date </label>
          <input type="number" name={days} id="days"/>
        </div>
        <button className='submit-button' type='submit'>Submit</button>
      </form>
      </div>
    )
  }
}
export default LocationForm;