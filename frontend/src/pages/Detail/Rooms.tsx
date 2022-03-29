import QueryString from 'qs';
import CheckInOut from 'components/CheckInOut/CheckInOut';
import Room from 'components/Room/Room';
import { useEffect, useState } from 'react';
import { getAllRoomList } from 'src/utils/requests';
import { Buttons, SelectBtn, Selected } from './Rooms.style';
import { addDays } from 'date-fns';
import { Link, useLocation, useParams } from 'react-router-dom';
import Spinner from 'components/Spinner/Spinner';
import { getReservedRooms } from 'src/utils/reservations';

const Rooms = () => {
  const { id }=useParams();
  const location=useLocation();
  const queryData = QueryString.parse(location.search, { ignoreQueryPrefix: true });

  const [hotelId, setHotelId] = useState<string>(id);

  const [rooms, setRooms] = useState<object[]>([]);
  const [selectedRoom, setSelectedRoom] = useState<object[]>([]);
  const [isLoaded, setIsLoaded]=useState(false);

  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(addDays(new Date(), 1));

  useEffect(()=>{
    if(queryData.checkIn) setStartDate(new Date(queryData.checkIn));
    if(queryData.checkOut) setEndDate(new Date(queryData.checkOut));
  },[]);

  useEffect(() => {
    const requestRooms = async () => {
      setIsLoaded(true);
      const checkIn = `${startDate.getFullYear()}-${(startDate.getMonth() + 1)<10?'0'+(startDate.getMonth() + 1):startDate.getMonth() + 1}-${startDate.getDate()<10?'0'+startDate.getDate():startDate.getDate()}`;
      const checkOut = `${endDate.getFullYear()}-${(endDate.getMonth() + 1)<10?'0'+(endDate.getMonth() + 1):endDate.getMonth() + 1}-${endDate.getDate()<10?'0'+endDate.getDate():endDate.getDate()}`;
      
      const Rooms = await getAllRoomList(hotelId, checkIn, checkOut);
      const reservedRooms = await getReservedRooms(hotelId, checkIn, checkOut);
      console.log(reservedRooms)
      const nonReservedRooms=reservedRooms.length?Rooms.filter(room=>reservedRooms.indexOf(room.name) === -1) : Rooms;
      setRooms(nonReservedRooms);
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
      {isLoaded && <Spinner />}
      <Buttons>
        {selectedRoom.name ? (
          <>
            <Selected>
              현재 선택된 객실 : <span>{selectedRoom.name}</span>
            </Selected>
            <Link to={`/reservation/${hotelId}`} >
              <SelectBtn>
                예약하기
              </SelectBtn>
            </Link>
          </>
        ) : (
          <SelectBtn disabled>예약하기</SelectBtn>
        )}
      </Buttons>
    </>
  );
};

export default Rooms;
