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
      <h3>
        {'Date: ' +
          dayArray[date.getDay()] +
          ', ' +
          (date.getMonth() + 1) +
          '/' +
          date.getDate() +
          '/' +
          (date.getFullYear()-2000)}
      </h3>
    </div>
  );
};

DateDisplay.propTypes = {
  strDate: PropTypes.string.isRequired,
};

export default DateDisplay;
