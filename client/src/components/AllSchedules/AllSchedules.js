import React from 'react';
import { Link } from 'react-router-dom';

import DateDisplay from '../DateDisplay/DateDisplay';

const AllSchedules = props => {
  return (
    <div>
      {props.schedules
        .slice(0)
        .reverse()
        .map(schedule => {
          return (
            <React.Fragment key={schedule._id}>
              <Link
                style={{ textDecoration: 'none' }}
                to={`/schedules/${schedule._id}`}
              >
                <DateDisplay strDate={schedule.currentDate} />
              </Link>
            </React.Fragment>
          );
        })}
    </div>
  );
};

export default AllSchedules;
