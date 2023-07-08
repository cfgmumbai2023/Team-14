const express = require('express');
const multer= require('multer');
const mysql = require('mysql2');
require('dotenv').config();
const dbHost = process.env.DB_HOST;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;

// Use the variables in your code...

const app = express();
const port = 3000;
const connection = mysql.createConnection({
    host: dbHost,
    user: dbUser,
    password: dbPassword,
    database: 'test'
  });
connection.connect((error) => {
    if (error) {
      console.error('Error connecting to MySQL:', error);
      return;
    }
    console.log('Connected to MySQL database!');
  });
  
app.get('/api/users', (req, res) => {
  const sql = 'SELECT * FROM users';

  connection.query(sql, (error, results) => {
    if (error) {
      console.error('Error executing MySQL query:', error);
      res.status(500).json({ error: 'Error executing MySQL query' });
      return;
    }
    res.json(results);
  });
});
app.listen(port, () => {
    console.log(`API listening at http://localhost:${port}`);
  });