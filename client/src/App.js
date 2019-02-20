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

  render() {
    return (
      <div className="App">
        <h1>BadaTracker</h1>
        <div>
          {this.state.schedules.map(schedule => {
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
