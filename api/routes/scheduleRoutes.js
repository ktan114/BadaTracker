const {
  getSchedule,
  getAllSchedule,
  postSchedule,
  putSchedule,
} = require('../controllers/schedules');

module.exports = server => {
  server.route('/api/schedules/:id').get(getSchedule);
  server.route('/api/schedules').get(getAllSchedule);
  server.route('/api/schedules/:id').post(postSchedule);
  server.route('/api/schedules/:id').put(putSchedule);
};
