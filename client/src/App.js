import React, { Component } from 'react';
import axios from 'axios';

import './App.css';

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
        console.log('Found', res);
        this.setState({ schedules: res.data.schedules });
      })
      .catch(err => console.log('Error'));
  };

  render() {
    return (
      <div className="App">
        <p>Hello World</p>
        <div>
          {this.state.schedules.map(schedule => {
            let date = new Date(schedule.currentDate)
            console.log("Schedule", date.getMonth())
            return (
              <React.Fragment key={ schedule._id }>
                <h1>Medicine: {`${ schedule.medicine}`}</h1>
                <h1>Trips Outside: { schedule.trips }</h1>
                <h1>Date: { date.getMonth()+1 + "/" + date.getDate() + "/" + date.getFullYear() }</h1>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
