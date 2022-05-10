import axios from 'axios';

export const getUserCart = async (id: string) => {
  return await axios
    .get(`/api/cart/${id}`)
    .then(({ data }) => data)
    .catch(e => console.log(e));
};
