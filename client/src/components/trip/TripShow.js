import React, { Component} from 'react';
import moment from 'moment';

const TripShow = ({name, end_time, start_date}) => (
<>
<h2>{name}</h2>
<p>Start Date: {start_date} </p>
<p>End Date: {end_time} </p>
</>
)

export default TripShow;