import CheckInOut from "components/CheckInOut/CheckInOut";
import Room from "components/Room/Room";
import { useEffect, useState } from "react";
import { getAllRoomList } from "src/utils/requests";
import {Buttons, SelectBtn} from "./Rooms.style";

const Rooms = () => {

  const [hotelId, setHotelId] = useState<string>('229056');
  const [rooms, setRooms]=useState<object[]>([]);

  useEffect(()=>{
    const requestRooms = async () => {
      const Rooms = await getAllRoomList(hotelId);
      setRooms(Rooms);
    };
    requestRooms();
  },[]);

  return(
    <div>
      <CheckInOut checkIn={new Date()} checkOut={new Date()} />
      <ul>
        {/* {rooms.map((room, index) => 
          <Room key={index} room={room} />
        )} */}
      </ul>
      <Buttons>
        <SelectBtn>예약하기</SelectBtn>
      </Buttons>
    </div>
  )
}

export default Rooms;