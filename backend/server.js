require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

let users = require('./data/users.json');
let reservations = require('./data/reservations.json');
let hotels = require('./data/hotels.json');
let reviews = require('./data/reviews.json');

const { PORT } = process.env;

app.use(cors());
app.use(express.json());

app.post('/users', (req, res) => {
  console.log('create user!');
  const user = users.find(({ id }) => id === req.body.id);

  if (user) {
    res.send(user);
  } else {
    users = [...users, req.body];
    res.send(req.body);
  }
});

app.patch('/users/:searchId', (req, res) => {
  console.log('update user!');
  const { searchId } = req.params;
  const data = users
    .filter(({ id }) => id === searchId)
    .map((state) => ({ ...state, ...req.body }));
  console.log(data);
  res.send(data);
});

app.get('/detail', (req, res) => {
  res.send(users);
});

app.get('/reservations/:searchId', (req, res) => {
  console.log('search user reservations by date');

  const { searchId } = req.params;
  const { from, to } = req.query;

  const reservationFilterByDate = reservations.filter(
    ({ userId, checkInDate, checkOutDate }) =>
      userId === searchId && checkInDate >= from && checkOutDate <= to
  );

  const reservationWithHotelInfo = reservationFilterByDate.map(
    (reservation) => {
      const { name, photo } = hotels.find(
        (hotel) => hotel.id === reservation.hotelId
      );
      return { ...reservation, name, photo };
    }
  );

  const selectedReservationWithReview = reservationWithHotelInfo.map(
    (reservation) =>
      reviews.find((review) => review.reservationId === reservation.id)
        ? { ...reservation, review: true }
        : { ...reservation, review: false }
  );

  res.send(selectedReservationWithReview);
});

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
