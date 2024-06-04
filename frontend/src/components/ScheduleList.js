import React from 'react';

const ScheduleList = ({ schedules }) => {
    return (
        <ul>
            {schedules.map((schedule) => (
                <li key={schedule._id}>
                    {schedule.date} - {schedule.timeSlot} - {schedule.telescope} - {schedule.instrument}
                </li>
            ))}
        </ul>
    );
};

export default ScheduleList;

