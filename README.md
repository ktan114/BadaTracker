# BadaTracker

Application used to keep track of Bada's Daily Schedule

# Table of Contents
- [Tech Stack](https://github.com/ktan114/BadaTracker/tree/kevin/readme#tech-stack)
    - [Back End Dependencies](https://github.com/ktan114/BadaTracker/tree/kevin/readme#back-end-dependencies)
    - [Front End Dependencies](https://github.com/ktan114/BadaTracker/tree/kevin/readme#front-end-dependencies)

- [Environment Variables](https://github.com/ktan114/BadaTracker/tree/kevin/readme#environment-variables)
    - [Front End Variables](https://github.com/ktan114/BadaTracker/tree/kevin/readme#back-end-variables)
    - [Back End Variables](https://github.com/ktan114/BadaTracker/tree/kevin/readme#front-end-variables)

- [Scripts](https://github.com/ktan114/BadaTracker/tree/kevin/readme#scripts)
    - [Back End Scripts](https://github.com/ktan114/BadaTracker/tree/kevin/readme#back-end-scripts)
    - [Front End Scripts](https://github.com/ktan114/BadaTracker/tree/kevin/readme#front-end-scripts)

- [API Documentation](https://github.com/ktan114/BadaTracker/tree/kevin/readme#api-documentation)
    - [Back End Routes](https://github.com/ktan114/BadaTracker/tree/kevin/readme#back-end-routes)
        -[Schedule Routes](https://github.com/ktan114/BadaTracker/tree/kevin/readme#schedule-routes)

# Tech Stack

## Back End Dependencies
- cors
- dotenv
- express
- helmet
- mongoose
- nodemon

## Front End Dependencies
- axios
- bootstrap
- jquery
- popper.js
- prop-types
- react
- react-dom
- react-router-dom

# Environment Variables 

## Back End Variables 
- `localPath`: Path used during development
- `herokuPath`: Path used during production

## Front End Variables
- `localURI`: URI used during development
- `mLabURI`: URI used during production

# Scripts

## Back End Scripts
- `yarn server`: Start up local server
- `mongod`: Start up local mongoDB

## Front End Scripts
- `yarn start`: Start the React project
- `yarn less`: Start the LESS compiler

# API Documentation

## Back End Routes

### Schedule Routes

***Get All Schedules***
GET `api/schedules`

Retrieve all schedules saved

**Get A Specific Schedule By ID**
GET `api/schedules/:id` 

Retrieves the specific schedule for that date

**Create a New Schedule**
POST `api/schedules`

Creates a new schedule

**Edit an Existing Schedule By ID**
PUT `api/schedules/:id`

Update a schedule based on its ID

**Delete an Existing Schedule By ID**
DELETE `api/schedules/:id`

Deletes a schedule based on id