import CheckInOut from 'components/CheckInOut/CheckInOut';
import Room from 'components/Room/Room';
import { useEffect, useState } from 'react';
import { getAllRoomList } from 'src/utils/requests';
import { Buttons, SelectBtn, Selected } from './Rooms.style';
import { addDays } from 'date-fns';
import { Link, useParams } from 'react-router-dom';
import Loader from 'components/Review/Loader';

const Rooms = () => {
  const { id }=useParams();

  const [hotelId, setHotelId] = useState<string>(id);

  const [rooms, setRooms] = useState<object[]>([]);
  const [selectedRoom, setSelectedRoom] = useState<object[]>([]);
  const [isLoaded, setIsLoaded]=useState(false);


  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(addDays(new Date(), 1));

  useEffect(() => {
    const requestRooms = async () => {
      setIsLoaded(true);
      const checkIn = `${startDate.getFullYear()}-${startDate.getMonth() + 1}-${startDate.getDate()}`;
      const checkOut = `${endDate.getFullYear()}-${endDate.getMonth() + 1}-${endDate.getDate()}`;
      
      const Rooms = await getAllRoomList(hotelId, checkIn, checkOut);
      setRooms(Rooms);
      setIsLoaded(false);
    };
    requestRooms();
    setSelectedRoom([]);
  }, [endDate]);

  return (
    <>
      <CheckInOut startDate={startDate} setStartDate={setStartDate} endDate={endDate} setEndDate={setEndDate} />
      <ul>
        {rooms.map((room, index) => 
          <Room key={index} room={room} setSelectedRoom={setSelectedRoom} />
        )}
      </ul>
      {isLoaded && <Loader />}
      <Buttons>
        {selectedRoom.name ? (
          <>
            <Selected>
              현재 선택된 객실 : <span>{selectedRoom.name}</span>
            </Selected>
            <SelectBtn>예약하기</SelectBtn>
          </>
        ) : (
          <SelectBtn disabled>예약하기</SelectBtn>
        )}
      </Buttons>
    </>
  );
};

export default Rooms;
