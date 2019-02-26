import React from 'react';
import PropTypes from 'prop-types';

const Trips = props => {
  return (
    <div>
      <h1>Trips: {props.trips}</h1>
      <button onClick={() => props.handleClick(1)}>Increment</button>
      <button onClick={() => props.handleClick(-1)}>Decrement</button>
    </div>
  );
};

Trips.propTypes = {
  trips: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Trips;
