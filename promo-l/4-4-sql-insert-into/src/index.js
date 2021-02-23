const express = require('express');
const cors = require('cors');
const Database = require('better-sqlite3');

// create server
const app = express();

// set express middleware
app.use(express.json());
app.use(cors());

// init express aplication
const serverPort = 3000;
app.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

// init and config data base
const db = new Database('./src/database.db', {
  // this line log in console all data base queries
  verbose: console.log
});

// api endpoints

app.get('/insert-into', (req, res) => {
  const query = db.prepare(`INSERT INTO users (email, password) VALUES (?, ?)`);
  const result = query.run('celia@gmail.com', 'asdf');
  res.json(result);
});