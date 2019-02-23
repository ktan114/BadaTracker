import React, { Component } from 'react';
import axios from 'axios';

import './App.css';
import Schedule from './components/Schedule/Schedule';

const apiPath = require('./config/API.json');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      schedules: [],
    };
  }

  componentDidMount() {
    this.getAllSchedules();
  }

  getAllSchedules = () => {
    axios
      .get(`${apiPath[apiPath.basePath]}api/schedules`)
      .then(res => {
        this.setState({ schedules: res.data.schedules });
      })
      .catch(err => console.log('Error'));
  };

  createASchedule = () => {
    axios
      .post(`${apiPath[apiPath.basePath]}api/schedules`)
      .then(() => {
        this.getAllSchedules();
      })
      .catch(err => console.log('Error'));
  };

  render() {
    return (
      <div className="App">
        <h1>Bada Tracker</h1>
        <button onClick={this.createASchedule}>
          Create A New Schedule For Today
        </button>
        <div>
          {this.state.schedules
            .slice(0)
            .reverse()
            .map(schedule => {
              return (
                <React.Fragment key={schedule._id}>
                  <Schedule
                    schedule={schedule}
                    getAllSchedules={this.getAllSchedules}
                  />
                </React.Fragment>
              );
            })}
        </div>
      </div>
    );
  }
}

export default App;
