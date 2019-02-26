const {
  getSchedule,
  getAllSchedules,
  postSchedule,
  putSchedule,
  deleteSchedule,
} = require('../controllers/schedules');

module.exports = server => {
  server.route('/api/schedules/:id').get(getSchedule);
  server.route('/api/schedules').get(getAllSchedules);
  server.route('/api/schedules').post(postSchedule);
  server.route('/api/schedules/:id').put(putSchedule);
  server.route('/api/schedules/:id').delete(deleteSchedule);
};
