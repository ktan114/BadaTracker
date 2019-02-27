import React from 'react';
import { Link } from 'react-router-dom';

import DateDisplay from '../DateDisplay/DateDisplay';
import DeleteSchedule from '../DeleteSchedule/DeleteSchedule';

const AllSchedules = props => {
  return (
    <div>
      {props.schedules
        .slice(0)
        .reverse()
        .map(schedule => {
          return (
            <div
              key={schedule._id}
              style={{ display: 'flex', justifyContent: 'center' }}
            >
              <Link
                style={{ textDecoration: 'none' }}
                to={`/schedules/${schedule._id}`}
              >
                <DateDisplay strDate={schedule.currentDate} />
              </Link>
              <DeleteSchedule
                id={schedule._id}
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
