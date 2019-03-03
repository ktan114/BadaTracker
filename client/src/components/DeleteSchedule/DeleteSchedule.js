import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const apiPath = require('../../config/API.json');

const DeleteSchedule = props => {
  const handleDelete = id => {
    axios
      .delete(`${apiPath[apiPath.basePath]}api/schedules/${id}`)
      .then(() => {
        props.getAllSchedules();
      })
      .catch(() => console.log('Error'));
  };

  return (
    <div className="Delete">
      <button
        className={`Delete__Button ${
          props.delete ? 'Delete__Button--mark' : 'Delete_Button--link'
        }`}
        onClick={() => handleDelete(props.id)}
      >
        {props.delete ? <React.Fragment>&times;</React.Fragment> : 'Delete'}
      </button>
    </div>
  );
};

DeleteSchedule.propTypes = {
  id: PropTypes.string.isRequired,
  getAllSchedules: PropTypes.func.isRequired,
  delete: PropTypes.bool.isRequired,
};

export default DeleteSchedule;
