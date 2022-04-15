import QueryString, { ParsedQs } from 'qs';
import { memo, useCallback, useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { addDays } from 'date-fns';
import Spinner from 'components/Spinner/Spinner';
import changeDateFormatToIsoSTring from '../../utils/dateToISOString';

import CheckInOut from 'components/CheckInOut/CheckInOut';
import Room from 'components/Room/Room';
import { DetailRoomProps, RoomProps } from 'components/Room/Room.types';
import SelectBar from 'components/Room/Selector/SelectBar';
import { NotFoundRooms } from './Rooms.style';

import { getAllRoomList } from 'src/utils/requests';
import { getReservedRooms } from 'src/utils/reservations';

const Rooms = () => {
  const { id: hotelId } = useParams<string>();
  const location = useLocation();
  const { checkIn, checkOut }: ParsedQs = QueryString.parse(location.search, { ignoreQueryPrefix: true });

  const [rooms, setRooms] = useState<DetailRoomProps[] | undefined>([]);
  const [selectedRoom, setSelectedRoom] = useState<RoomProps>();
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(addDays(new Date(), 1));

  const setCheckInDate = useCallback((date: Date) => setStartDate(date), [startDate]);
  const setCheckOutDate = useCallback((date: Date) => setEndDate(date), [endDate]);

  const setSelector = useCallback((room: RoomProps) => setSelectedRoom(room), [selectedRoom]);

  useEffect(() => {
    if (checkIn) setStartDate(new Date(checkIn));
    if (checkOut) setEndDate(new Date(checkOut));
  }, []);

  const setSessionStorage = useCallback(() => {
    window.sessionStorage.setItem('SELECTED_ROOM', JSON.stringify({ ...selectedRoom, startDate, endDate }));
  }, [selectedRoom]);

  useEffect(() => {
    const requestRooms = async () => {
      setRooms([]);
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
      <CheckInOut startDate={startDate} setCheckInDate={setCheckInDate} endDate={endDate} setCheckOutDate={setCheckOutDate} />
      {isLoaded && <Spinner />}
      {rooms.length ?
        <>
          <ul>
            {rooms.map((room, index) => <Room key={index} room={room} setSelector={setSelector} />)}
          </ul>
          <SelectBar selectedRoom={selectedRoom} hotelId={hotelId} setSessionStorage={setSessionStorage} />
        </>
        :
        !isLoaded &&
        <NotFoundRooms>
          <p>예약할 수 있는 객실이 존재하지 않습니다.</p>
          <p>다른 날짜를 선택해주세요.</p>
        </NotFoundRooms>
      }
    </>
  );
};

export default memo(Rooms);
