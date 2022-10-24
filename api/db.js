'use strict';
const mysql = require('mysql');

const db = mysql.createConnection({
  host: process.env.DB_HOST || "sql6.freemysqlhosting.net",
  user: process.env.DB_USER || "sql6528776",
  password: process.env.DB_PASS || "HJFvSIgTs7",
  database: process.env.DB_NAME || "sql6528776"
});

module.exports = db