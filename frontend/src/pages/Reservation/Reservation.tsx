import React, { MouseEvent, useCallback, useEffect, useMemo, useReducer, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AuthType, authUpdate, selectAuth } from 'src/contexts/auth';

import { ReservationWrapper } from './Reservation.style';
import PaymentForm from 'components/Payment/PaymentForm';

import { postHotel } from 'src/utils/hotels';
import { postReservation } from 'src/utils/reservations';
import { getPhoneNumber, updateReservation } from 'src/utils/users';
import { postPayment } from 'src/utils/payment';

import swal from 'sweetalert';
import { useAppSelector } from 'src/contexts/state.type';
import changeDateFormatToIsoSTring from 'src/utils/dateToISOString';
import { reducer } from './Reducer';
import { RoomInfo } from 'components/Payment/Payment.type';

const Reservation = () => {

  const { id: hotelId } = useParams();
  const { id: userId } = useAppSelector(selectAuth) as AuthType;

  let phone='';
  useEffect(()=>{
    const getPhone=async()=>{
      if(userId){
        const data=await getPhoneNumber(userId);
        phone=data.phone;
      } 
    }
    getPhone();
  },[]);

  const roomInfo = JSON.parse(window.sessionStorage.getItem("SELECTED_ROOM")) as RoomInfo;
  const hotelName = window.sessionStorage.getItem("HOTEL_NAME");

  // 1. 이전 페이지에서 객실 정보를 어떻게 받아올건지
  const selectedRoom = {
    hotelName: hotelName,
    name: roomInfo.name,
    photo: roomInfo.images[0].fullSizeUrl,
    checkIn: changeDateFormatToIsoSTring(roomInfo.startDate),
    checkOut: changeDateFormatToIsoSTring(roomInfo.endDate),
    cost: roomInfo.ratePlans[0].price.unformattedCurrent,
    occupancy: roomInfo.maxOccupancy.total + roomInfo.maxOccupancy.children,
    adults: roomInfo.maxOccupancy.total,
    children: roomInfo.maxOccupancy.children,
  };

  // reservation 정보와 rooms 정보를 나눠서 객체로 반환,
  // 각 rooms에 reservation 정보를 추가해서 데이터에 저장하는 형태로 변경하기
  const initialState = {
    reservation: {
      userId: userId,
      hotelAPIId: +hotelId,
      isAgrees: [false, false, false],
      // checkInDate: selectedRoom.checkIn,
      // checkOutDate: selectedRoom.checkOut,
      hasCar: true,
      // cost: selectedRoom.cost,
      // occupancy: selectedRoom.occupancy,
      // adults: selectedRoom.adults,
      // children: selectedRoom.children,
      // spec: selectedRoom.name,
      username: '',
      phone: '',
    },

    payment: {
      userId: userId,
      cost: selectedRoom.cost
    },

    hotel: {  // 객체 형태로 변경
      name: selectedRoom.hotelName,
      photo: selectedRoom.photo
    },

    sameUser: false
  }

  const [state, dispatch] = useReducer(reducer, initialState);
  const { reservation, payment, hotel, sameUser } = state;

  const data=[];
  data.push(selectedRoom);
  data.push(selectedRoom);
  data.push(selectedRoom);

  const totalPrice = useMemo(() => data.reduce((total, {cost}) => total + +cost, 0), [data]);

  const sumbmitBtn = useRef<HTMLButtonElement>();
  const navigate = useNavigate();

  const handleReservation = useCallback((id: string, value: string | boolean | number | object) => {
    dispatch({
      type: 'HANDLE_RESERVATION',
      id,
      value
    })
  }, []);

  const handleAgree = useCallback((isAgrees: boolean[]) => {
    const id = 'isAgrees';
    const value = isAgrees;
    handleReservation(id, value)
  }, [reservation]);

  const handleUserClick = useCallback(() => {
    const id = 'phone';
    const value = !sameUser ? phone : '';
    const isSameUser = !sameUser;
    handleReservation(id, value);
    dispatch({
      type: 'SAME_USER',
      isSameUser
    });
  }, [reservation]);

  const handleUserInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    handleReservation(id, value);
  }, [reservation]);

  const handleVisited = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const id = 'hasCar';
    const value = e.target.checked;
    handleReservation(id, value);
  }, [reservation]);


  const handleButton = useCallback((e: MouseEvent) => {
    e.preventDefault();

    swal({
      title: '예약 정보를 확인해주세요!',
      text: `예약자: ${reservation.username}\n연락처: ${reservation.phone}`,
      icon: 'info',
      buttons: ['취소', '결제하기']
    }).then((result) => {
      if (result) {
        swal({
          title: '결제 확인',
          text: '결제가 성공적으로 완료되었습니다!',
          icon: 'success',
        })
        handleSubmit();
        navigate('/mypage');
      }
    })

  }, [])

  const authDispatch = useDispatch();

  const handleSubmit = async () => {
    // 각 rooms별로 반복문 돌려서 수행
    const hotelData = await postHotel(hotel);
    const hotelId = hotelData.id;
    const reservationdata = await postReservation(reservation, hotelId);
    const reservationId = reservationdata.id;
    await postPayment(reservationId, payment);
    const reservations = await updateReservation(userId, reservationId);
    authDispatch(authUpdate({ reservations: reservations ? reservations : [] }));
  }

  useEffect(() => {
    // 모든 필수 입력이 입력되었을 때만 결제 버튼 활성화
    sumbmitBtn.current.disabled = !(reservation.username && reservation.phone && reservation.isAgrees[0]);

  }, [reservation]);

  return (
    <ReservationWrapper>
      <h2 className = "srOnly">예약 페이지</h2>
      <PaymentForm
        data = { data }
        sumbmitBtn = { sumbmitBtn }
        reservation = { reservation }
        handleButton = { handleButton }
        handleSubmit = { handleSubmit }
        handleAgree = { handleAgree }
        handleVisited = { handleVisited }
        handleUserClick = { handleUserClick }
        handleUserInput = { handleUserInput }
        cost = { totalPrice }
      />
    </ReservationWrapper>
  );
};

export default Reservation;
