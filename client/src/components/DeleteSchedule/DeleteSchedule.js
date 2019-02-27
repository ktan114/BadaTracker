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

  const deleteMark = {
    border: 'none',
    fontSize: '30px',
    color: 'red',
    fontWeight: 'bold',
  };

  const deleteLink = {
    border: 'none',
    textDecoration: 'underline',
    fontSize: '20px',
    marginTop: '12px',
    marginLeft: '10%'
  };

  return (
    <div style={{ marginTop: '8px', marginLeft: '1%' }}>
      <button
        style={props.delete ? deleteMark : deleteLink}
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
  delete: PropTypes.bool.isRequired
};

export default DeleteSchedule;
