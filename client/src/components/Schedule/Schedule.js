import React, { Component } from 'react';
import PropTypes from 'prop-types';

import DateDisplay from '../DateDisplay/DateDisplay';
import Medicine from '../Medicine/Medicine';

class Schedule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      schedule: props.schedule,
      medicine: props.schedule.medicine,
    };
  }

  handleMedicine = () => {
    const stateSchedule = this.state.schedule;
    stateSchedule.medicine = !stateSchedule.medicine;
    this.setState((state, props) => ({
      medicine: !state.medicine,
      schedule: stateSchedule
    }));
  };

  render() {
    const { schedule, medicine } = this.state;
    return (
      <div>
        <DateDisplay strDate={schedule.currentDate} />
        <Medicine medicine={medicine} handleMedicine={this.handleMedicine} />
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
