import React, { Component } from 'react';
import axios from 'axios';

import './App.css';

const apiPath = require('./config/API.json');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  componentDidMount() {
    this.getAllSchedules();
  }

  getAllSchedules = () => {
    axios
      .get(`${apiPath[apiPath.basePath]}api/schedules`)
      .then(res => {
        console.log("Found", res);
      })
      .catch(err => console.log('Error'));
  };

  render() {
    return (
      <div className="App">
        <p>Hello World</p>
      </div>
    );
  }
}

export default App;
