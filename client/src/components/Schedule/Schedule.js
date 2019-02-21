import React, { Component } from 'react';
import PropTypes from 'prop-types';

import DateDisplay from '../DateDisplay/DateDisplay';
import Medicine from '../Medicine/Medicine';

class Schedule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      schedule: props.schedule,
    };
  }

  render() {
    const { schedule } = this.state;
    return (
      <div>
        <DateDisplay strDate={schedule.currentDate} />
        <Medicine medicine={schedule.medicine} />
      </div>
    );
  }
}

Schedule.propTypes = {
  schedule: PropTypes.shape({
    currentDate: PropTypes.string,
    medicine: PropTypes.bool,
    trips: PropTypes.number,
  }).isRequired,
  getAllSchedules: PropTypes.func.isRequired,
};

export default Schedule;
