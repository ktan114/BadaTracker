const { getSchedule } = require('./getSchedule');
const { getAllSchedules } = require('./getAllSchedules');
const { postSchedule } = require('./postSchedule');
const { putSchedule } = require('./putSchedule');
const { deleteSchedule } = require('./deleteSchedule');

module.exports = {
    getSchedule,
    getAllSchedules,
    postSchedule,
    putSchedule,
    deleteSchedule
}
