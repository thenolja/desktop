require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

let users = require('./data/users.json');

const { PORT } = process.env;

app.use(cors());
app.use(express.json());

app.get('/users/:searchId', (req, res) => {
  const { searchId } = req.params;
  const data = users.filter(({ id }) => id === searchId);
  res.send(data);
});

app.post('/users', (req, res) => {
  console.log('create user!');
  users = [...users, req.body];
  res.send(users);
});

app.patch('/users/:searchId', (req, res) => {
  console.log('update user!');
  const { searchId } = req.params;
  const data = users
    .filter(({ id }) => id === searchId)
    .map((state) => ({ ...state, ...req.body }));
  res.send(data);
});

app.get('/detail', (req, res) => {
  res.send(users);
});

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
