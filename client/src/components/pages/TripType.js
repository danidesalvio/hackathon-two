import React from 'react';
import { Container, Card, Image } from 'semantic-ui-react';
import arches from '../images/arches.jpg';
import aspen from '../images/aspen.jpg';

const TripType = () => (
  <>
    <div class="image-header trip-types">
        <h1>Trip Types</h1>
        <div class="img-overlay"></div>
    </div>
    <Container>
    <div class="trip-section">
      <Card.Group itemsPerRow={2}>
        <Card>
          <Image src={arches} wrapped ui={false}/>
        </Card>
        <Card raised image={aspen}
        
        />
      </Card.Group>
    </div>
    </Container>
  </>
)

export default TripType;