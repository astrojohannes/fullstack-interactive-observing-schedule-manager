const mongoose = require('mongoose');

const scheduleSchema = new mongoose.Schema({
    date: { type: Date, required: true },
    timeSlot: { type: String, required: true },
    telescope: { type: String, required: true },
    instrument: { type: String, required: true }
});

module.exports = mongoose.model('Schedule', scheduleSchema);

