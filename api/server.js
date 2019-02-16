const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const mongoose = require('mongoose');

const URI = require('./config/keys').URI;
const scheduleRoutes = require('./routes/scheduleRoutes');

mongoose
  .connect(URI, { useNewUrlParser: true })
  .then(() => console.log('Database is connected\n'))
  .catch(() => console.log('Database is not connected\n'));

const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(cors());
server.use(helmet());

scheduleRoutes(server);

const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`\nServer running on port: ${port}`));
