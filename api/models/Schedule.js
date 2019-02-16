const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ScheduleSchema = new Schema({
    currentDate: {
        type: Date,
        default: Date.now
    },
    medicine: {
        type: boolean,
        default: false
    },
    trips: {
        type: Number,
        default: 0
    }
})

module.exports = mongoose.model('schedule', ScheduleSchema)