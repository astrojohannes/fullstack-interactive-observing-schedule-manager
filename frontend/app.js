document.getElementById('scheduleForm').addEventListener('submit', async function (e) {
    e.preventDefault();

    const date = document.getElementById('date').value;
    const timeSlot = document.getElementById('timeSlot').value;
    const telescope = document.getElementById('telescope').value;
    const instrument = document.getElementById('instrument').value;

    const response = await fetch('http://localhost:5000/api/schedules', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ date, timeSlot, telescope, instrument })
    });

    const result = await response.json();
    displaySchedule();
});

async function displaySchedule() {
    const response = await fetch('http://localhost:5000/api/schedules');
    const schedules = await response.json();

    const scheduleList = document.getElementById('scheduleList');
    scheduleList.innerHTML = '';

    schedules.forEach(schedule => {
        const li = document.createElement('li');
        li.textContent = `${schedule.date} - ${schedule.timeSlot} - ${schedule.telescope} - ${schedule.instrument}`;
        scheduleList.appendChild(li);
    });
}

document.addEventListener('DOMContentLoaded', function () {
    displaySchedule();
});

