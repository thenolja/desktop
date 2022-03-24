import axios from 'axios';

const getReservationByDate = async (id: string, from: Date, to: Date) => {
  const [formattedFrom, formattedTo] = [from.toISOString().slice(0, 10), to.toISOString().slice(0, 10)];
  return await axios
    .get(`/api/reservations/${id}?from=${formattedFrom}&to=${formattedTo}`)
    .then(({ data }) => {
      return data;
    })
    .catch(e => console.log(e));
};

export { getReservationByDate };
