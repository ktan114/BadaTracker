import React, { Component } from 'react';
import PropTypes from 'prop-types';

import DateDisplay from '../DateDisplay/DateDisplay';
import Medicine from '../Medicine/Medicine';
import Trips from '../Trips/Trips';

class Schedule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      schedule: props.schedule,
      medicine: props.schedule.medicine,
      trips: props.schedule.trips,
    };
  }

  handleMedicine = () => {
    const stateSchedule = this.state.schedule;
    stateSchedule.medicine = !stateSchedule.medicine;
    this.setState((state, props) => ({
      medicine: !state.medicine,
      schedule: stateSchedule,
    }));
  };

  handleIncrement = () => {
    const stateSchedule = this.state.schedule;
    stateSchedule.trips++;
    this.setState((state, props) => ({
      schedule: stateSchedule,
      trips: stateSchedule.trips,
    }));
  };

  handleDecrement = () => {
    const stateSchedule = this.state.schedule;
    if (stateSchedule.trips === 0) stateSchedule.trips = 0;
    else stateSchedule.trips--;
    this.setState((state, props) => ({
      schedule: stateSchedule,
      trips: stateSchedule.trips,
    }));
  };

  render() {
    const { schedule, medicine, trips } = this.state;
    return (
      <div>
        <DateDisplay strDate={schedule.currentDate} />
        <Medicine medicine={medicine} handleMedicine={this.handleMedicine} />
        <Trips
          trips={trips}
          handleIncrement={this.handleIncrement}
          handleDecrement={this.handleDecrement}
        />
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
