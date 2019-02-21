import React from 'react';
import PropTypes from 'prop-types';

const Trips = props => {
  return (
    <div>
      <h1>Trips: {props.trips}</h1>
      <button onClick={props.handleIncrement}>Increment</button>
      <button onClick={props.handleDecrement}>Decrement</button>
    </div>
  );
};

Trips.propTypes = {
  trips: PropTypes.number.isRequired,
  handleIncrement: PropTypes.func.isRequired,
  handleDecrement: PropTypes.func.isRequired,
};

export default Trips;
