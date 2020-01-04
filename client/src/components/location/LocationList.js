import React, { Component} from 'react';
import Location from './Location';

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