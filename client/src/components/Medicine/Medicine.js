import React from 'react';
import PropTypes from 'prop-types';

const Medicine = props => {
  return (
    <div>
      <label htmlFor="medicine">Medicine: </label>
      <input
        onChange={() => props.handleClick('medicine')}
        type="checkbox"
        name="medicine"
        checked={props.medicine}
      />
    </div>
  );
};

Medicine.propTypes = {
  medicine: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Medicine;
