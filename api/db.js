'use strict';
const mysql = require('mysql');

const db = mysql.createConnection({
  host: process.env.DB_HOST || "sql6.freemysqlhosting.net",
  user: process.env.DB_USER || "sql6528776",
  password: process.env.DB_PASS || "HJFvSIgTs7",
  database: process.env.DB_NAME || "sql6528776"
});

// const db = mysql.createConnection({
//   host: process.env.DB_HOST || "localhost",
//   user: process.env.DB_USER || "root",
//   password: process.env.DB_PASS || "",
//   database: process.env.DB_NAME || "createcv"
// });

module.exports = db