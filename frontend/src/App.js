import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ScheduleForm from './components/ScheduleForm';
import ScheduleList from './components/ScheduleList';
import './styles.css';

const App = () => {
    const [schedules, setSchedules] = useState([]);

    const fetchSchedules = async () => {
        const response = await axios.get('http://localhost:5000/api/schedules');
        setSchedules(response.data);
    };

    useEffect(() => {
        fetchSchedules();
    }, []);

    const addSchedule = async (schedule) => {
        const response = await axios.post('http://localhost:5000/api/schedules', schedule);
        setSchedules([...schedules, response.data]);
    };

    return (
        <div className="container">
            <h1>Observing Schedule Manager</h1>
            <ScheduleForm addSchedule={addSchedule} />
            <h2>Scheduled Observations</h2>
            <ScheduleList schedules={schedules} />
        </div>
    );
};

export default App;

