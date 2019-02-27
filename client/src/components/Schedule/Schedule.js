import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Link } from 'react-router-dom';

import DateDisplay from '../DateDisplay/DateDisplay';
import Medicine from '../Medicine/Medicine';
import Trips from '../Trips/Trips';
import DeleteSchedule from '../DeleteSchedule/DeleteSchedule';

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

  handleClick = value => {
    const stateSchedule = this.state.schedule;
    if (value === 'medicine') stateSchedule.medicine = !stateSchedule.medicine;
    else {
      if (stateSchedule.trips === 0 && value === -1) stateSchedule.trips = 0;
      else stateSchedule.trips += value;
    }
    const { medicine, trips, _id } = stateSchedule;
    this.setState((state, props) => ({
      schedule: stateSchedule,
    }));
    this.updateDatabase(_id, {
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
    const { medicine, trips, currentDate, _id } = this.state.schedule;
    return (
      <div>
        <DateDisplay strDate={currentDate} />
        <Medicine medicine={medicine} handleClick={this.handleClick} />
        <Trips trips={trips} handleClick={this.handleClick} />
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button
            style={{ marginTop: '20px', border: 'none', fontSize: '20px' }}
          >
            <Link
              onClick={this.props.getAllSchedules}
              style={{ color: 'black' }}
              to="/"
            >
              Back
            </Link>
          </button>
          <Link to="/">
            <DeleteSchedule
              id={_id}
              getAllSchedules={this.props.getAllSchedules}
              delete={false}
            />
          </Link>
        </div>
      </div>
    );
  }
}

Schedule.propTypes = {
  id: PropTypes.string.isRequired,
  getAllSchedules: PropTypes.func.isRequired,
};

export default Schedule;
