const mysql = require('mysql2');
const express= require('express');
require('dotenv').config();
const app=express();

// Create a connection
const DBHOST =  process.env.dbhost;
const DBUSER = process.env.dbuser;
const DBPASSWORD = process.env.dbpassword;
const connection = mysql.createConnection({
  host: DBHOST,
  user: DBUSER,
  password: DBPASSWORD,
  database: 'urmi'
});

connection.connect((err) => {
    if (err) {
      console.error('Error connecting to MySQL database:', err);
      return;
    }
    console.log('Connected to MySQL database');
  });

  connection.query('SELECT * FROM students_data', (err, rows) => {
    if (err) {
      console.error('Error executing MySQL query:', err);
      return;
    }
    console.log('Result:', rows);
  });
  app.get('/api/students', (req, res) => {
    connection.query('SELECT C1Q1  FROM MOCK_DATA', (err, rows) => {
      if (err) {
        console.error('Error executing MySQL query:', err);
        res.status(500).json({ error: 'Internal server error' });
        return;
      }
      res.json(rows);
    });
  });
  app.get('/objective1/quarter1', (req, res) => {
    connection.query('SELECT AVG(C1Q1) as FROM MOCK_DATA m JOIN student_data s ON m.Student_ID= s.Student_ID WHERE s.Teacher_ID=1', (err, rows) => {
      if (err) {
        console.error('Error executing MySQL query:', err);
        res.status(500).json({ error: 'Internal server error' });
        return;
      }
      res.json(rows);
    });
  });
  
  // Start the server
  app.listen(9000, () => {
    console.log('Server started on port 3000');
  });
    