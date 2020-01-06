import React, {Component} from 'react';
import { Container } from 'semantic-ui-react';

class LocationShow  extends Component {
render() {
const { name, days } = this.props.location.state
  
return(
<>
    <div>
        <h1>{name}</h1>
    </div>
  <Container>
    <div>
      <h2>{days}</h2>
    </div>
  </Container> 
</>
  )
}
}
export default LocationShow;