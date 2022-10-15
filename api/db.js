'use strict';
const mysql = require('mysql');

const db = mysql.createConnection({
  host: process.env.DB_HOST || "sql6.freemysqlhosting.net",
  user: process.env.DB_USER || "sql6526645",
  password: process.env.DB_PASS || "4edbB5J7HP",
  database: process.env.DB_NAME || "sql6526645"
});

module.exports = db