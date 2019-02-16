const Schedule = require('../models/Schedule');

/*
    @route  PUT api/schedules/:id
    @desc   Update a schedule based on its ID
    @access Public (Development) | Private (Production)
*/

const putSchedule = (req, res) => {
  const { id } = req.params;
  const updateSchedule = req.body;

  Schedule.findOneAndRemove({ id }, updateSchedule)
    .then(schedule => res.status(200).json({ schedule }))
    .catch(err => res.status(500).json({ err, message: 'Error' }));
};

module.exports = { putSchedule };
