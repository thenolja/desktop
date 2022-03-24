import axios from 'axios';

const getUserById = async (id: string) => {
  return await axios
    .get(`/api/users/${id}`)
    .then(({ data }) => {
      return data[0];
    })
    .catch(e => console.log(e));
};

const createUser = (id: string, email: string, nickname: string) => {
  axios
    .post(`/api/users`, {
      id: id,
      email: email,
      nickname: nickname,
      phone: '',
      reservations: [],
      myReviews: [],
    })
    .then(res => console.log(res))
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

export { getUserById, createUser, updateUser };
