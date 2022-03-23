import CheckInOut from "components/CheckInOut/CheckInOut";
import Room from "components/Room/Room";
import { useEffect, useState } from "react";
import { getAllRoomList } from "src/utils/requests";
import { Buttons, SelectBtn } from "./Rooms.style";
import { addDays } from 'date-fns';

const Rooms = () => {

  const [hotelId, setHotelId] = useState<string>('229056');
  const [rooms, setRooms]=useState<object[]>([]);
  const [selectedRoom, setSelectedRoom]=useState<object[]>([]);

  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(addDays(new Date(), 1));
 
  useEffect(()=>{
    const requestRooms = async () => {
      const checkIn=`${startDate.getFullYear()}-${startDate.getMonth()+1}-${startDate.getDate()}`;
      const checkOut=`${endDate.getFullYear()}-${endDate.getMonth()+1}-${endDate.getDate()}`;
      
      const Rooms = await getAllRoomList(hotelId, checkIn, checkOut);
      setRooms(Rooms);
    };
    requestRooms();
  },[endDate]);

  return(
    <div>
      <CheckInOut
        startDate={startDate}
        setStartDate={setStartDate}
        endDate={endDate}
        setEndDate={setEndDate}
      />
      <ul>
        {rooms.map((room, index) => 
          <Room key={index} room={room} selectedRoom={selectedRoom} setSelectedRoom={setSelectedRoom} />
        )}
      </ul>
      <Buttons>
      {
      selectedRoom.name?
      <SelectBtn>예약하기</SelectBtn>
      :
      <SelectBtn disabled>예약하기</SelectBtn>
      }
      </Buttons>
    </div>
  )
}

export default Rooms;