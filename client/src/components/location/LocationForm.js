import React, { Component } from 'react';
import { Form, Container } from 'semantic-ui-react';


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
      <Container>
      <div className='location-form'>
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
        <div className='days'>
        <Form.Input
          type='number'
          name='days'
          value={days}
          onChange={this.handleChange}
          label='Days'
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
export default LocationForm;