import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import DateDisplay from '../DateDisplay/DateDisplay';
import DeleteSchedule from '../DeleteSchedule/DeleteSchedule';
import compareDate from '../../helpers/compareDate';

const AllSchedules = props => {
  return (
    <div className="Schedules">
      {props.schedules
        .slice(0)
        .reverse()
        .map(schedule => {
          let linkColor = 'Schedules__Links--grey';
          const { _id, currentDate, medicine, trips } = schedule;
          if (medicine && trips >= 2) linkColor = 'Schedules__Links--green';
          if (
            compareDate(new Date(schedule.currentDate), new Date()) &&
            (!medicine || trips < 2)
          )
            linkColor = 'Schedules__Links--red';
          return (
            <div key={_id} className="Schedules__Display">
              <Link
                className={`Schedules__Links ${linkColor}`}
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
};

export default AllSchedules;
