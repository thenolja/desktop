import QueryString, { ParsedQs } from 'qs';
import { memo, useCallback, useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { addDays } from 'date-fns';
import useSWR, { SWRConfig } from 'swr';

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

  const [selectedRoom, setSelectedRoom] = useState<RoomProps>();

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

  const requestRooms = async () => {
    const checkIn = changeDateFormatToIsoSTring(startDate);
    const checkOut = changeDateFormatToIsoSTring(endDate);

    const rooms = await getAllRoomList(hotelId, checkIn, checkOut);
    const reservedRooms = await getReservedRooms(hotelId, checkIn, checkOut);
    console.log(rooms);
    const nonReservedRooms =
      reservedRooms.length && rooms && rooms.length
        ? rooms.filter((room: RoomProps) => reservedRooms.indexOf(room.name) === -1)
        : rooms;
    return rooms ? nonReservedRooms : [];
  };

  function fetcher() {
    return new Promise(resolve => {
      resolve(requestRooms());
    });
  }
  const { data: rooms, error } = useSWR(
    changeDateFormatToIsoSTring(startDate) + changeDateFormatToIsoSTring(endDate),
    fetcher,
  );

  return (
    <SWRConfig value={{ provider: cache => cache }}>
      <CheckInOut
        startDate={startDate}
        setCheckInDate={setCheckInDate}
        endDate={endDate}
        setCheckOutDate={setCheckOutDate}
      />
      {!rooms && !error && <Spinner />}
      {rooms && rooms.length ? (
        <>
          <ul>
            {rooms.map((room, index) => (
              <Room key={index} room={room} setSelector={setSelector} />
            ))}
          </ul>
          {console.log()}
          <SelectBar
            startDate={changeDateFormatToIsoSTring(startDate) + ''}
            endDate={changeDateFormatToIsoSTring(endDate) + ''}
            selectedRoom={selectedRoom}
            hotelId={hotelId}
            setSessionStorage={setSessionStorage}
          />
        </>
      ) : (
        rooms &&
        !rooms.length && (
          <NotFoundRooms>
            <p>예약할 수 있는 객실이 존재하지 않습니다.</p>
            <p>다른 날짜를 선택해주세요.</p>
          </NotFoundRooms>
        )
      )}
    </SWRConfig>
  );
};

export default memo(Rooms);
