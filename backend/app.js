const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const scheduleRoutes = require('./routes/scheduleRoutes');

const app = express();

mongoose.connect('mongodb://localhost:27017/observing_schedule', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(cors());
app.use(bodyParser.json());

app.use('/api/schedules', scheduleRoutes);

module.exports = app;

