import Agreement from 'components/Payment/Agreement';
import Notice from 'components/Payment/Notice';
import Policy from 'components/Payment/Policy';
import PriceInfo from 'components/Payment/PriceInfo';
import UserInfo from 'components/Payment/UserInfo';
import Visiting from 'components/Payment/Visiting';
import { useEffect, useRef, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { selectAuth } from 'src/contexts/auth';
import { useAppSelector } from 'src/contexts/state.type';
import { postHotel } from 'src/utils/hotels';
import { postPayment } from 'src/utils/payment';
import { postReservation } from 'src/utils/reservations';
import { updateReservation } from 'src/utils/users';
import { ReservationWrapper } from './Reservation.style';

const Reservation = () => {

  const { id:hotelId }=useParams();

 // 스토리지에서 받아오기
  const selectedRoom = {
    name: 'hotel',
    photo:'photo url',
    checkIn: '2020-01-01',
    checkOut: '2020-10-10',
    cost: 10000,
    occupancy: 2,
    adults: 1,
    children: 1,
    spec: '[room spec]'
  };

  // ================ 데이터 받아오는 형식 정해진 후 하기 ====================

  const { id:userId, phone } = useAppSelector(selectAuth);


  const [reservation, setReservation]=useState({
    userId : userId,
    hotelId : hotelId,
    isAgrees : [false, false, false],
    checkInDate : selectedRoom.checkIn,
    checkOutDate : selectedRoom.checkOut,
    hasCar :  true,
    cost : selectedRoom.cost,
    occupancy : selectedRoom.occupancy,
    adults : selectedRoom.adults,
    children : selectedRoom.children,
    spec : selectedRoom.spec,
    username :  '',
    phone :  null,
  });

  const [payment]=useState({
    userId: userId,
    cost: selectedRoom.cost
  });

  const [hotel]=useState({
    name: selectedRoom.name,
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
      e.preventDefault();
      return false;
    }
  }

  const handleSubmit=async ()=>{
    const reservationdata=await postReservation(reservation);
    const reservationId=reservationdata.id;
    await postHotel(hotel);
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
      <form>
        <fieldset>
          <legend className="srOnly">결제 정보</legend>
          <UserInfo reservation={reservation} setReservation={setReservation} phone={phone} />
          <Visiting reservation={reservation} setReservation={setReservation} />
          <PriceInfo cost={selectedRoom.cost} />
          <Notice />
          <Agreement reservation={reservation} setReservation={setReservation} />
          <button type="submit" ref={sumbmitBtn} onClick={handleClick} onSubmit={handleSubmit}>{selectedRoom.cost}원 결제하기</button>
          <Policy />
        </fieldset>
      </form>
    </ReservationWrapper>
  );
};

export default Reservation;
