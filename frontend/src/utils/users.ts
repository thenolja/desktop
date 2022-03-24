import axios from 'axios';

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

export { createUser, updateUser };
