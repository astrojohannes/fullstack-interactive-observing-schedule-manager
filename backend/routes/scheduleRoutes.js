const express = require('express');
const Schedule = require('../models/Schedule');
const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const schedule = new Schedule(req.body);
        await schedule.save();
        res.status(201).send(schedule);
    } catch (error) {
        res.status(400).send(error);
    }
});

router.get('/', async (req, res) => {
    try {
        const schedules = await Schedule.find();
        res.send(schedules);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;

