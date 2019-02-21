import React from 'react';
import PropTypes from 'prop-types';

const DateDisplay = props => {
  const { strDate } = props;
  const date = new Date(strDate);
  return (
    <div>
      <h1>{'Date: ' + (date.getMonth()+1) + '/' + date.getDate() + '/' + date.getFullYear()}</h1>
    </div>
  );
};

DateDisplay.propTypes = {
  strDate: PropTypes.string.isRequired
}

export default DateDisplay ;
