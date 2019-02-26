import React from 'react';
import PropTypes from 'prop-types';

const DateDisplay = props => {
  const { strDate } = props;
  const date = new Date(strDate);
  const dayArray = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  return (
    <div>
      <h1>
        {'Date: ' +
          dayArray[date.getDay()] +
          ', ' +
          (date.getMonth() + 1) +
          '/' +
          date.getDate() +
          '/' +
          date.getFullYear()}
      </h1>
    </div>
  );
};

DateDisplay.propTypes = {
  strDate: PropTypes.string.isRequired,
};

export default DateDisplay;
