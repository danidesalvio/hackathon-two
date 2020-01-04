import React, { Component } from 'react';


class TripForm extends Component {
  state = { 
    name: '', 
    start_date: null,
    end_time: null,
  }

  componentDidMount() {
    if (this.props.id) {
      const { name, start_date, end_time } = this.props
      this.setState({ name, start_date, end_time })
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if (this.props.id) {
      this.props.updateTrip(this.props.id, this.state)
      this.props.toggleEdit() 
    } 
    else {
      this.props.addTrip(this.state)
      this.props.toggleAdd()
    }
    this.setState({ name: '', start_date: null, end_time: null })
    }

  render() {
    const { name, start_date, end_time } = this.state
    return(
      <div className='trip-form'>
      <form onSubmit={this.handleSubmit}>
       <div className='name'>
         <label for="name"> Name </label>
          <input type="text" name={name} id="name"/>
        </div>
        <div className='start-date'>
          <label for="start_date"> Start Date </label>
          <input type="date" name={start_date} id="start_date"/>
        </div>
        <div className='end-time'>
          <label for="end_time"> End Date </label>
          <input type="date" name={end_time} id="end_time"/>
        </div>
        <button className='submit-button' type='submit'>Submit</button>
      </form>
      </div>
    )
  }
}
export default TripForm;