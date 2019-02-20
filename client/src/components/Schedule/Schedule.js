import React, { Component } from 'react';

class Schedule extends Component {
    constructor(props) {
        super(props);
        this.state = {
            schedule: props.schedule
        }
    }

    render() {
        const { schedule } = this.state;
        const date = new Date(schedule.currentDate);
        return (
            <div>
                
            </div>
        )
    }

}

export default Schedule;