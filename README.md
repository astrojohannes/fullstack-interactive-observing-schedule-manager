# Observing Schedule Manager

The Observing Schedule Manager is a web application that allows users to schedule observing sessions by selecting time slots and combinations of telescopes and instruments.

## Features

- **Schedule Observations**: Users can create new observation schedules by selecting a date, time slot, telescope, and instrument.
- **View Scheduled Observations**: Users can view all scheduled observations in a list format.

## Technologies Used

- **Backend**: Node.js, Express.js, Mongoose (MongoDB)
- **Frontend**: React, Axios, CSS
- **Other Dependencies**: body-parser, cors

## Directory Structure

```bash
observing-schedule-manager/
├── backend/
│ ├── models/
│ │ └── Schedule.js
│ ├── routes/
│ │ └── scheduleRoutes.js
│ ├── app.js
│ └── server.js
└── frontend/
├── public/
│ ├── index.html
└── src/
├── components/
│ ├── ScheduleForm.js
│ └── ScheduleList.js
├── App.js
├── index.js
└── styles.css
```


## Getting Started

### Prerequisites

- Node.js installed on your machine
- MongoDB installed and running on your machine

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/astrojohannes/fullstack-interactive-observing-schedule-manager
    cd fullstack-interactive-observing-schedule-manager
    ```

2. Install backend dependencies:
    ```bash
    cd backend
    npm install
    ```

3. Install frontend dependencies:
    ```bash
    cd frontend
    npm install
    ```

### Running the Application

#### Backend

1. Start the MongoDB server:
    ```bash
    mongod
    ```

2. Run the backend server:
    ```bash
    cd backend
    node server.js
    ```

   The backend server will be running on `http://localhost:5000`.

#### Frontend

1. Start the React development server:
    ```bash
    cd frontend
    npm start
    ```

   The frontend will be running on `http://localhost:3000`.

## Usage

1. Navigate to the frontend in your browser.
2. Fill in the form with the date, time slot, telescope, and instrument for your observation.
3. Click "Submit" to schedule the observation.
4. View the list of scheduled observations below the form.

## API Endpoints

- **POST /api/schedules**: Create a new schedule.
- **GET /api/schedules**: Retrieve all schedules.

## Contributing

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

