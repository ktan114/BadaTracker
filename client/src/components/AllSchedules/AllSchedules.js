import React from 'react';
import { Link } from 'react-router-dom';

import DateDisplay from '../DateDisplay/DateDisplay';
import DeleteSchedule from '../DeleteSchedule/DeleteSchedule';
import compareDate from '../../helpers/compareDate';

const AllSchedules = props => {
  return (
    <div>
      {props.schedules
        .slice(0)
        .reverse()
        .map(schedule => {
          let color = 'grey';
          const {_id, currentDate, medicine, trips } = schedule;
          if (medicine && trips >= 2) color = 'green';
          if (compareDate(new Date(schedule.currentDate), new Date()) && (!medicine || trips < 2)) color = 'red';
          return (
            <div
              key={_id}
              style={{ display: 'flex', justifyContent: 'center' }}
            >
              <Link
                style={{ textDecoration: 'none', color: color }}
                to={`/schedules/${_id}`}
              >
                <DateDisplay strDate={currentDate} />
              </Link>
              <DeleteSchedule
                id={_id}
                getAllSchedules={props.getAllSchedules}
                delete={true}
              />
            </div>
          );
        })}
    </div>
  );
};

export default AllSchedules;
