const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const server = express();

server.use(express.json());
server.use(cors());
server.use(helmet());

const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`Connected on port: ${port}\n`) )