import React, { Component } from 'react';
import { Form, Container } from 'semantic-ui-react';


class TripForm extends Component {
  state = { 
    name: '', 
    start_date: '',
    end_time: '',
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
    this.setState({ name: '', start_date: '', end_time: '' })
    }

  render() {
    const { name, start_date, end_time } = this.state
    return(
      <Container>
      <div className='trip-form'>
      <Form onSubmit={this.handleSubmit}>
       <div className='name'>
       <Form.Input
          name='name'
          value={name}
          onChange={this.handleChange}
          label='Name'
          required
          />
        </div>
        <div className='start-date'>
        <Form.Input
          type={<input type='date'/>}
          name='start_date'
          value={start_date}
          onChange={this.handleChange}
          label='Start Date'
          required
          />
        </div>
        <div className='end-time'>
        <Form.Input
          type={<input type='date'/>}
          name='end_time'
          value={end_time}
          onChange={this.handleChange}
          label='End Date'
          required
          />
        </div>
        <button className='submit-button' type='submit'>Submit</button>
      </Form>
      </div>
      </Container>
    )
  }
}
export default TripForm;