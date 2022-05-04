import axios from 'axios';

const isValidProfile = (nickname: string, password: string) =>
  /^[ㄱ-힣a-zA-Z0-9._]{2,6}$/.test(nickname) && /^[0-9]{11}$/.test(password);

const createUser = async ({ id, email, nickname }) => {
  return await axios
    .post(`/api/users`, {
      id: id,
      email: email,
      nickname: nickname,
      phone: '',
      reservations: [],
      myReviews: [],
    })
    .then(({ data }) => {
      return data;
    })
    .catch(e => console.log(e));
};

const updateUser = async (id: string, nickname: string, phone: string) => {
  return await axios
    .patch(`/api/users/${id}`, {
      nickname: nickname,
      phone: phone,
    })
    .then(({ data }) => {
      return data[0];
    })
    .catch(e => console.log(e));
};

const updateReservation = async (userId: string, reservationId) => {
  return await axios
    .patch(`/api/reservation/user`, {
      userId: userId,
      reservationId: reservationId,
    })
    .then(({ data }) => data)
    .catch(e => console.error(e));
};

const updateReview = async (id: string, nickname: string) => {
  return await axios
    .patch(`/api/review/user`, {
      id: id,
      nickname: nickname,
    })
    .then(({ data }) => data)
    .catch(e => console.error(e));
};

const getPhoneNumber = async (id: string) => {
  return await axios
    .post('/api/user/phone', {
      id: id,
    })
    .then(({ data }) => data)
    .catch(e => console.error(e));
};
export { isValidProfile, createUser, updateUser, updateReservation, updateReview, getPhoneNumber };
