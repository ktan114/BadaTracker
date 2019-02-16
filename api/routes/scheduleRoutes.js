const {
  getSchedule,
  getAllSchedules,
  postSchedule,
  putSchedule,
} = require('../controllers/schedules');

module.exports = server => {
  server.route('/api/schedules/:id').get(getSchedule);
  server.route('/api/schedules').get(getAllSchedules);
  server.route('/api/schedules').post(postSchedule);
  server.route('/api/schedules/:id').put(putSchedule);
};
