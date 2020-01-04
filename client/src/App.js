import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './components/pages/Home';
import Navbar from './components/shared/Navbar';
import Trip from './components/trip/Trip';
import TripShow from './components/trip/TripShow';
import TripType from './components/pages/TripType';
import Footer from './components/shared/Footer';



const App = () => (
  <div>
    <Navbar/>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/trip" component={Trip}/>
      <Route exact path="/trips/:id" component={TripShow} />
      <Route exact path="/trip_types" component={TripType} />
    </Switch>
    
    <Footer/>
  </div>
)

export default App;
