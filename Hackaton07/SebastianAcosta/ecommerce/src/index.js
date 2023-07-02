const dotenv= require('dotenv');
const axios = require("axios");
const cheerio = require("cheerio");



dotenv.config();

const Server = require('./server/server.js');

const server = new Server();

server.listen();


