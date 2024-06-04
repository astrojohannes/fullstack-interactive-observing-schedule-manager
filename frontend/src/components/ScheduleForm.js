import React, { useState } from 'react';

const ScheduleForm = ({ addSchedule }) => {
    const [date, setDate] = useState('');
    const [timeSlot, setTimeSlot] = useState('');
    const [telescope, setTelescope] = useState('');
    const [instrument, setInstrument] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addSchedule({ date, timeSlot, telescope, instrument });
        setDate('');
        setTimeSlot('');
        setTelescope('');
        setInstrument('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="date">Date:</label>
            <input type="date" id="date" value={date} onChange={(e) => setDate(e.target.value)} required />

            <label htmlFor="timeSlot">Time Slot:</label>
            <input type="text" id="timeSlot" value={timeSlot} onChange={(e) => setTimeSlot(e.target.value)} required />

            <label htmlFor="telescope">Telescope:</label>
            <input type="text" id="telescope" value={telescope} onChange={(e) => setTelescope(e.target.value)} required />

            <label htmlFor="instrument">Instrument:</label>
            <input type="text" id="instrument" value={instrument} onChange={(e) => setInstrument(e.target.value)} required />

            <button type="submit">Submit</button>
        </form>
    );
};

export default ScheduleForm;

