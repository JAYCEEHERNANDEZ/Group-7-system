// db.js
const mysql = require("mysql2");

// Create connection pool (better for multiple requests)
const db = mysql.createPool({
  host: "127.0.0.1",
  user: "root",
  password: "",       // your MySQL root password
  database: "sucol_db",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Optional: test connection
db.getConnection((err, connection) => {
  if (err) {
    console.error("Database connection failed:", err);
    return;
  }
  console.log("Connected to MySQL database: sucol_db");
  connection.release();
});

module.exports = db;
