import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Link } from 'react-router-dom';

import DateDisplay from '../DateDisplay/DateDisplay';
import Medicine from '../Medicine/Medicine';
import Trips from '../Trips/Trips';

const apiPath = require('../../config/API.json');

class Schedule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      schedule: {},
      id: props.match.params.id,
    };
  }

  componentDidMount() {
    this.getSchedule(this.state.id);
  }

  handleMedicine = () => {
    const stateSchedule = this.state.schedule;
    stateSchedule.medicine = !stateSchedule.medicine;
    this.setState((state, props) => ({
      medicine: !state.medicine,
      schedule: stateSchedule,
    }));
    const { medicine, trips } = stateSchedule;
    this.updateDatabase(stateSchedule._id, {
      medicine: medicine,
      trips: trips,
    });
  };

  handleClick = value => {
    const stateSchedule = this.state.schedule;
    stateSchedule.trips += value;
    this.setState((state, props) => ({
      schedule: stateSchedule,
      trips: stateSchedule.trips,
    }));
    const { medicine, trips } = stateSchedule;
    this.updateDatabase(stateSchedule._id, {
      medicine: medicine,
      trips: trips,
    });
  };

  updateDatabase = (id, updatedSchedule) => {
    axios
      .put(`${apiPath[apiPath.basePath]}api/schedules/${id}`, updatedSchedule)
      .then(() => console.log('Success!'))
      .catch(err => console.log('Error', err));
  };

  getSchedule = id => {
    let schedule = this.state.schedule;
    axios
      .get(`${apiPath[apiPath.basePath]}api/schedules/${id}`)
      .then(res => {
        schedule = { ...schedule, ...res.data.schedule };
        this.setState({ schedule: schedule });
      })
      .catch(err => console.log('Error', err));
  };

  render() {
    const { medicine, trips, currentDate } = this.state.schedule;
    return (
      <div>
        <DateDisplay strDate={currentDate} />
        <Medicine medicine={medicine} handleMedicine={this.handleMedicine} />
        <Trips trips={trips} handleClick={this.handleClick} />
        <button style={{ marginTop: '20px', border: 'none', fontSize: '20px' }}>
          <Link to="/">Back</Link>
        </button>
      </div>
    );
  }
}

Schedule.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Schedule;
