const Schedule = require('../models/Schedule');

/*
    @route  GET api/schedules/:id
    @desc   Retrieves the specific schedule for that date
    @access Public (Development) | Private (Production)
*/

const getSchedule = (req, res) => {
  const { id } = req.params;

  Schedule.findOne({ _id: id })
    .then(schedule => res.status(200).json({ schedule }))
    .catch(err => res.status(500).json({ err, message: 'Error' }));
};

module.exports = { getSchedule };