const Schedule = require('../../models/Schedule');

/*
    @route  POST api/schedules
    @desc   Creates a new schedule
    @access Public (Development) | Private (Production)
*/

const postSchedule = (req, res) => {
  const { medicine, trips } = req.body;
  const newSchedule = new Schedule({ medicine, trips });

  newSchedule
    .save()
    .then(success => res.status(200).json({ success }))
    .catch(err => res.status(500).json({ err, message: 'Error' }));
};

module.exports = { postSchedule };
