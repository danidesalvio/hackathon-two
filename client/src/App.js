import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './components/pages/Home';
import Navbar from './components/shared/Navbar';
import Trip from './components/trip/Trip';
import TripShow from './components/trip/TripShow';



const App = () => (
  <div>
    <Navbar/>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/trip" component={Trip}/>
      <Route exact path="/trip/:id" component={TripShow} />
    </Switch>
  </div>
)

export default App;
