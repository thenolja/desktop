require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

let users = require('./data/users.json');

const { PORT } = process.env;

app.use(cors());

app.get('/detail', (req, res) => {
  res.send(users);
});

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});