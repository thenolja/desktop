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
  console.log(id, email, nickname);
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

export { getUserById, createUser };
