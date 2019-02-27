import React from 'react';
import PropTypes from 'prop-types';

const DeleteSchedule = props => {
  return (
    <div style={{ marginTop: '20px', marginLeft: '1%' }}>
      <button
        style={{
          border: 'none',
          fontSize: '30px',
          color: 'red',
          fontWeight: 'bold',
        }}
        onClick={() => props.handleDelete(props.id)}
      >
        &times;
      </button>
    </div>
  );
};

DeleteSchedule.propTypes = {
  id: PropTypes.string.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default DeleteSchedule;
