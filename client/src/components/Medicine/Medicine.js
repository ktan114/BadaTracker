import React from 'react';
import PropTypes from 'prop-types';

const Medicine = props => {
  return (
    <div className="Medicine">
      <label className="Medicine__Label" htmlFor="medicine">Medicine: </label>
      <input
        onChange={() => props.handleClick('medicine')}
        type="checkbox"
        name="medicine"
        checked={props.medicine}
        className="Medicine__Input"
      />
    </div>
  );
};

Medicine.propTypes = {
  medicine: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Medicine;
