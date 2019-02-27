import React, { Component } from 'react';
import axios from 'axios';
import { Route, Link } from 'react-router-dom';

import './App.css';
import Schedule from './components/Schedule/Schedule';
import AllSchedules from './components/AllSchedules/AllSchedules';

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
        if (this.state.schedules.length > 0) {
          const lastSchedule = this.state.schedules[
            this.state.schedules.length - 1
          ];
          const lastDate = new Date(lastSchedule.currentDate).getDate();
          const currentDate = new Date().getDate();
          if (lastDate !== currentDate) this.createASchedule();
        }
        else {
          this.createASchedule();
        }
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
    const { schedules } = this.state;
    return (
      <div className="App">
        <h1>Bada Tracker</h1>
        <Link to="/">
          <button onClick={this.createASchedule}>
            Create A New Schedule For Today
          </button>
        </Link>
        <Route
          exact
          path="/"
          render={props => (
            <AllSchedules
              {...props}
              schedules={schedules}
              getAllSchedules={this.getAllSchedules}
            />
          )}
        />
        <Route
          path="/schedules/:id"
          render={props => (
            <Schedule {...props} getAllSchedules={this.getAllSchedules} />
          )}
        />
      </div>
    );
  }
}

export default App;
