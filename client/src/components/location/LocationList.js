import React, { Component} from 'react';

class LocationList extends Component {
  render() {
    const { name, days} = this.props

  return(
    <>
          {
            locations.map ( location =>
              <div>
                  <h1>{name}</h1>
                  <h2>{days}</h2>
              </div>
            )
          }
      </>
  )
  }
}

export default LocationList;