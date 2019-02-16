const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { ObjectId } = Schema.Types;

const ScheduleSchema = new Schema({
    id: ObjectId,
    currentDate: {
        type: Date,
        default: Date.now
    },
    medicine: {
        type: Boolean,
        default: false
    },
    trips: {
        type: Number,
        default: 0
    }
})

module.exports = mongoose.model('schedule', ScheduleSchema)