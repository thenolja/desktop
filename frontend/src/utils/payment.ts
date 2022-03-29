import axios from "axios";
import changeDateFormatToIsoSTring from "./dateToISOString";

const postPayment = async (reservationId, payment)=>{
  const date=new Date();
  return await axios.post('/api/reservation/payment', {
    reservationId:reservationId,
    payment:payment,
    paymentDate: changeDateFormatToIsoSTring(date)
  })
  .then(({data})=>data)
  .catch(e=>console.error(e));
}

export {postPayment};