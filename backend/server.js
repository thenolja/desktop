require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

let users = require('./data/users.json');
let reservations = require('./data/reservations.json');
let hotels = require('./data/hotels.json');
let payments = require('./data/payment.json');
let reviews = require('./data/reviews.json');
let carts = require('./data/carts.json');

const { PORT } = process.env;

app.use(cors());
app.use(express.json());

const generateId = (data) => Math.max(...data.map(({ id }) => +id), 0) + 1;

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

  const reservationWithHotelInfo = reservationFilterByDate.map((reservation) => {
    const { name, photo } = hotels.find((hotel) => hotel.id === reservation.hotelId);
    return { ...reservation, name, photo };
  });

  const selectedReservationWithReview = reservationWithHotelInfo.map((reservation) => {
    const review = reviews.find((review) => review.reservationId === reservation.id);
    return { ...reservation, review: review ? review : null };
  });

  res.send(selectedReservationWithReview);
});

app.patch('/reviews', (req, res) => {
  const id = generateId(reviews);
  const { userId } = req.query;
  let data = {};

  if (req.body.id) {
    console.log('update review!');
    req.body.id = +req.body.id;
    reviews = reviews.map((review) => {
      if (review.id === +req.body.id) {
        data = { ...review, ...req.body };
        return data;
      }
      return review;
    });
  } else {
    console.log('create review!');
    reviews = [...reviews, { ...req.body, id: id }];
    data = { ...req.body, id: id };

    const user = users.find(({ id }) => id === userId);
    user.myReviews = [...user.myReviews, id];
  }
  res.send(data);
});

app.get('/reviews/:id', (req, res) => {
  const { id } = req.params;

  res.send(reviews.filter((review) => +id === review.hotelId));
});

app.get('/reviews/title/:id', (req, res) => {
  const { id } = req.params;
  let total = 0,
    rating = 0;

  reviews.forEach((review) => {
    if (+id === review.hotelId) {
      rating += review.star;
      total++;
    }
  });
  res.send([total, rating]);
});

app.get('/reserved/:hotelId', (req, res) => {
  const { hotelId } = req.params;
  const { checkIn, checkOut } = req.query;

  const reservedRoom = [];
  reservations.forEach((reservation) => {
    if (
      reservation.hotelAPIId === +hotelId &&
      +reservation.checkInDate.split('-').join('') >= +checkIn.split('-').join('') &&
      +reservation.checkOutDate.split('-').join('') <= +checkOut.split('-').join('')
    )
      reservedRoom.push(reservation.spec);
  });

  res.send(reservedRoom);
});

app.post('/reservation/payment', (req, res) => {
  const id = generateId(payments);
  const { reservationId, payment, paymentDate } = req.body;
  const data = {
    id: id,
    reservationId: reservationId,
    paymentDate: paymentDate,
    ...payment,
  };
  payments = [...payments, data];
  res.send(data);
});

app.post('/reservation/reservation', (req, res) => {
  const id = generateId(reservations);
  const data = { id: id, ...req.body.reservation, hotelId: req.body.hotelId };
  reservations = [...reservations, data];
  res.send(data);
});

app.post('/reservation/hotel', (req, res) => {
  const id = generateId(hotels);
  const data = { id: id, ...req.body };
  hotels = [...hotels, data];
  res.send(data);
});

app.patch('/reservation/user', (req, res) => {
  users.map((user) => {
    if (user.id === req.body.userId) {
      user.reservations = [...user.reservations, req.body.reservationId];
      return user;
    }
  });
  res.send(users);
});

app.delete('/review/:id', (req, res) => {
  const { id } = req.params;
  let idx;
  reviews.forEach((review, index) => {
    if (+id === review.id) idx = index;
  });
  reviews.splice(idx, 1);
  res.send(reviews);
});

app.patch('/review/user', (req, res) => {
  users.map((user) => {
    if (user.nickname === req.body.nickname) {
      user.myReviews = user.myReviews.filter((review) => review !== +req.body.id);
      return user;
    }
  });
  res.send(users);
});

app.get('/cart/:id', (req, res) => {
  const { id } = req.params;
  console.log(carts);
  res.send(carts.filter((cart) => id === cart.userId));
});

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
