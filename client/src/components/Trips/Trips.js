import React from 'react';
import PropTypes from 'prop-types';

const Trips = props => {

  const styleButton = {
    borderRadius: '50%',
    fontSize: '40px',
    width: '20%'
  }

  return (
    <div>
      <h1>Trips: {props.trips}</h1>
      <div style={{ display: 'flex', justifyContent: 'space-around', width: '50%', marginLeft: '25%' }}>
        <button style={{...styleButton, color: 'green' }} onClick={() => props.handleClick(1)}>+</button>
        <button style={{...styleButton, color: 'red'}} onClick={() => props.handleClick(-1)}>-</button>
      </div>
    </div>
  );
};

Trips.propTypes = {
  trips: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Trips;
