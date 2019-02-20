import React, { Component } from 'react';

import DateDisplay from '../DateDisplay/DateDisplay';

class Schedule extends Component {
    constructor(props) {
        super(props);
        this.state = {
            schedule: props.schedule
        }
    }

    render() {
        const { schedule } = this.state;
        return (
            <div>
                <DateDisplay strDate={ schedule.currentDate } />
            </div>
        )
    }

}

export default Schedule;