import React from 'react';
import PropTypes from 'prop-types';

const Trips = props => {

  return (
    <div className="Trips">
      <div className="Trips__Container">
        <button className="Trips__Button Trips__Button--green" onClick={() => props.handleClick(1)}>+</button>
        <h1 className="Trips__h1">Trips: {props.trips}</h1>
        <button className="Trips__Button Trips__Button--red"  onClick={() => props.handleClick(-1)}>-</button>
      </div>
    </div>
  );
};

Trips.propTypes = {
  trips: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Trips;
