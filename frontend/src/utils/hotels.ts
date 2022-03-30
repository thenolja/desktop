import axios from "axios";

const postHotel = async (hotel)=>{
  return await axios.post('/api/reservation/hotel', hotel)
  .then(({data})=>data)
  .catch(e=>console.error(e));
}

export {postHotel};