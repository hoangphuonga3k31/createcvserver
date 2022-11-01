'use strict';
const mysql = require('mysql');

const db = mysql.createConnection({
  host: process.env.DB_HOST || "sql12.freemysqlhosting.net",
  user: process.env.DB_USER || "sql12532246",
  password: process.env.DB_PASS || "Luw2T4yLgy",
  database: process.env.DB_NAME || "sql12532246"
});

// const db = mysql.createConnection({
//   host: process.env.DB_HOST || "localhost",
//   user: process.env.DB_USER || "root",
//   password: process.env.DB_PASS || "",
//   database: process.env.DB_NAME || "createcv"
// });


module.exports = db