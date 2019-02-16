const Schedule = require('../../models/Schedule');

/*
    @route  GET api/schedules
    @desc   Retrieve all schedules saved
    @access Public (Development) | Private (Production)
*/
const getAllSchedules = (req, res) => {
  Schedule.find()
    .then(schedules => res.status(200).json({ schedules }))
    .catch(err => res.status(500).json({ err, message: 'Error' }));
};

module.exports = { getAllSchedules };
