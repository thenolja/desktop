import QueryString, { ParsedQs } from 'qs';
import CheckInOut from 'components/CheckInOut/CheckInOut';
import Room from 'components/Room/Room';
import { useEffect, useState } from 'react';
import { getAllRoomList } from 'src/utils/requests';
import { Buttons, SelectBtn, Selected, NotFoundRooms } from './Rooms.style';
import { addDays } from 'date-fns';
import { Link, useLocation, useParams } from 'react-router-dom';
import Spinner from 'components/Spinner/Spinner';
import { getReservedRooms } from 'src/utils/reservations';
import { DetailRoomProps, RoomProps } from 'components/Room/Room.types';
import changeDateFormatToIsoSTring from '../../utils/dateToISOString';

const Rooms = () => {

  const { id } = useParams<string>();
  const location = useLocation();
  const { checkIn, checkOut }: ParsedQs = QueryString.parse(location.search, { ignoreQueryPrefix: true });

  const [hotelId, setHotelId] = useState<string>(id);

  const [rooms, setRooms] = useState<DetailRoomProps[] | undefined>([]);
  const [selectedRoom, setSelectedRoom] = useState<RoomProps>();
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(addDays(new Date(), 1));

  useEffect(() => {
    if (checkIn) setStartDate(new Date(checkIn));
    if (checkOut) setEndDate(new Date(checkOut));
  }, []);

  useEffect(() => {
    window.sessionStorage.setItem("SELECTED_ROOM", JSON.stringify({ ...selectedRoom, startDate, endDate }));
  }, [selectedRoom]);

  useEffect(() => {
    const requestRooms = async () => {
      setIsLoaded(true);
      const checkIn = changeDateFormatToIsoSTring(startDate);
      const checkOut = changeDateFormatToIsoSTring(endDate);

      const Rooms = await getAllRoomList(hotelId, checkIn, checkOut);
      const reservedRooms = await getReservedRooms(hotelId, checkIn, checkOut);

      const nonReservedRooms = reservedRooms.length && Rooms && Rooms.length ? Rooms.filter((room: RoomProps) => reservedRooms.indexOf(room.name) === -1) : Rooms;
      Rooms ? setRooms(nonReservedRooms) : setRooms([]);
      setIsLoaded(false);
    };
    requestRooms();
    setSelectedRoom({});
  }, [endDate]);

  return (
    <>
      <CheckInOut startDate={startDate} setStartDate={setStartDate} endDate={endDate} setEndDate={setEndDate} />
      {isLoaded && <Spinner />}
      {
        rooms.length ?
          <>
            <ul>
              {rooms.map((room, index) =>
                <Room key={index} room={room} setSelectedRoom={setSelectedRoom} />
              )}
            </ul>
            <Buttons>
              {selectedRoom && selectedRoom.name ? (
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
          :
          !isLoaded && <NotFoundRooms><p>예약할 수 있는 객실이 존재하지 않습니다.</p><p>다른 날짜를 선택해주세요.</p></NotFoundRooms>
      }
    </>
  );
};

export default Rooms;
