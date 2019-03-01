import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import DateDisplay from '../DateDisplay/DateDisplay';
import DeleteSchedule from '../DeleteSchedule/DeleteSchedule';
import compareDate from '../../helpers/compareDate';

const AllSchedules = props => {
  const { display, schedules } = props;
  return (
    <div>
      {schedules
        .slice(display ? (schedules.length >= 7 ? schedules.length - 7 : 0) : 0)
        .reverse()
        .map(schedule => {
          let color = 'grey';
          const { _id, currentDate, medicine, trips } = schedule;
          if (medicine && trips >= 2) color = 'green';
          if (
            compareDate(new Date(schedule.currentDate), new Date()) &&
            (!medicine || trips < 2)
          )
            color = 'red';
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

AllSchedules.propTypes = {
  schedules: PropTypes.array.isRequired,
  getAllSchedules: PropTypes.func.isRequired,
  display: PropTypes.bool.isRequired
};

export default AllSchedules;
