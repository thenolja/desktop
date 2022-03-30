import PaymentForm from 'components/Payment/PaymentForm';
import { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { selectAuth } from 'src/contexts/auth';
import { useAppSelector } from 'src/contexts/state.type';
import changeDateFormatToIsoSTring from 'src/utils/dateToISOString';
import { postHotel } from 'src/utils/hotels';
import { postPayment } from 'src/utils/payment';
import { postReservation } from 'src/utils/reservations';
import { updateReservation } from 'src/utils/users';
import { ReservationWrapper } from './Reservation.style';

const Reservation = () => {

  const { id:hotelId }=useParams();

  const roomInfo=JSON.parse(window.sessionStorage.getItem("SELECTED_ROOM"));
  const hotelName=window.sessionStorage.getItem("HOTEL_NAME");

  const selectedRoom = {
    hotelName: hotelName,
    name: roomInfo.name,
    photo: roomInfo.images[0].fullSizeUrl,
    checkIn: changeDateFormatToIsoSTring(roomInfo.startDate),
    checkOut: changeDateFormatToIsoSTring(roomInfo.endDate),
    cost: roomInfo.ratePlans[0].price.unformattedCurrent,
    occupancy: roomInfo.maxOccupancy.total+roomInfo.maxOccupancy.children,
    adults: roomInfo.maxOccupancy.total,
    children: roomInfo.maxOccupancy.children,
  };

  const { id:userId, phone } = useAppSelector(selectAuth);

  const [reservation, setReservation]=useState({
    userId : userId,
    hotelId : +hotelId,
    isAgrees : [false, false, false],
    checkInDate : selectedRoom.checkIn,
    checkOutDate : selectedRoom.checkOut,
    hasCar :  true,
    cost : selectedRoom.cost,
    occupancy : selectedRoom.occupancy,
    adults : selectedRoom.adults,
    children : selectedRoom.children,
    spec : selectedRoom.name,
    username :  '',
    phone :  null,
  });

  const [payment]=useState({
    userId: userId,
    cost: selectedRoom.cost
  });

  const [hotel]=useState({
    name: selectedRoom.hotelName,
    photo: selectedRoom.photo
  })

  const sumbmitBtn=useRef();
  const navigate=useNavigate();

  const handleClick=async e=>{
    e.preventDefault();
    const isAllow=confirm(`예약자:${reservation.username} 결제 하시겠습니까?`);
    if(isAllow){
      await handleSubmit();
      navigate('/mypage');
    } else{
      return false;
    }
  }

  const handleSubmit=async ()=>{
    const hotelData=await postHotel(hotel);
    const hotelId=hotelData.id;
    const reservationdata=await postReservation(reservation, hotelId);
    const reservationId=reservationdata.id;
    await postPayment(reservationId, payment);
    await updateReservation(userId, reservationId);
  }

  useEffect(()=>{
    // 모든 필수 입력이 입력되었을 때만 결제 버튼 활성화
    sumbmitBtn.current.disabled = !(reservation.username && reservation.phone && reservation.isAgrees[0]);
    
  },[reservation]);

  return (
    <ReservationWrapper>
      <h2 className="srOnly">예약 페이지</h2>
      <PaymentForm sumbmitBtn={sumbmitBtn} handleClick={handleClick} handleSubmit={handleSubmit} reservation={reservation} setReservation={setReservation} phone={phone} cost={selectedRoom.cost} />
    </ReservationWrapper>
  );
};

export default Reservation;
