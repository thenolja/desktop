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

const getReservedRooms = async (hotelId:string, checkIn:string, checkOut:string)=>{
  return await axios.get(`/api/reserved/${hotelId}?checkIn=${checkIn}&checkOut=${checkOut}`)
  .then(({data})=>data)
  .catch(e=>console.error(e));
}

const postReservation = async (reservation)=>{
  return await axios.post('/api/reservation/reservation', reservation)
  .then(({data})=>data)
  .catch(e=>console.error(e));
}

export { getReservationByDate, getReservedRooms, postReservation};
