const Schedule = require('../../models/Schedule');

/*
    @route  DELETE api/schedules/:id
    @desc   Deletes a schedule based on id
    @access Public (Development) | Private (Production)
*/

const deleteSchedule = (req, res) => {
  const { id } = req.params;

  Schedule.findByIdAndDelete(id)
    .then(() => res.status(200).json({ message: 'Success' })
    .catch(err => res.status(500).json({ err, message: 'Error' }));
};

module.exports = { deleteSchedule };
