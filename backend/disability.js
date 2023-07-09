app.get('/disability1', (req, res) => {
    const query = 'SELECT avg(ADHD) from MOCK_DATA';
    connection.query(query, (err, results) => {
      if (err) {
        console.error('Error executing the query: ', err);
        res.status(500).json({ error: 'Internal server error' });
        return;
      }
      const students = results.map((result) => {
        return { id: result.id, name: result.name };
      });
      res.json(students);
    });
});

app.get('/disability2', (req, res) => {
    const query = 'SELECT avg(ADHD) from MOCK_DATA';
    connection.query(query, (err, results) => {
      if (err) {
        console.error('Error executing the query: ', err);
        res.status(500).json({ error: 'Internal server error' });
        return;
      }
      const students = results.map((result) => {
        return { id: result.id, name: result.name };
      });
      res.json(students);
    });
});

app.get('/disability3', (req, res) => {
    const query = 'SELECT avg(ADHD) from MOCK_DATA';
    connection.query(query, (err, results) => {
      if (err) {
        console.error('Error executing the query: ', err);
        res.status(500).json({ error: 'Internal server error' });
        return;
      }
      const students = results.map((result) => {
        return { id: result.id, name: result.name };
      });
      res.json(students);
    });
});