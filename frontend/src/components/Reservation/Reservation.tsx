import { useEffect, useMemo, useState } from 'react';
import { useScrollPrevent } from 'src/hooks/useScroll';
import { selectAuth } from 'src/contexts/auth';
import { useAppSelector } from 'src/contexts/state.type';

import DatePickerComponent from './DatePicker';
import PostingReview from './PostingReview';

import ReservationList from './Reservation.style';
import { getReservationByDate } from 'src/utils/reservations';
import { ReservationItem } from './Reservation.type';

const Reservations = () => {
  const { id } = useAppSelector(selectAuth);

  const [reservationList, setReservationList] = useState<Object[]>([]);

  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(new Date());

  const [showDialog, setDialog] = useState<boolean>(false);

  useScrollPrevent(showDialog);

  useEffect(() => {
    const getReservationList = async (): Promise<void> => {
      const list = await getReservationByDate(id, startDate, endDate);
      setReservationList(list);
    };
    getReservationList();
  }, [startDate, endDate]);

  const selectItem = (index: number): void => {
    sessionStorage.setItem('selectedItem', JSON.stringify(reservationList[index]));
    setDialog(true);
  };

  const memoizedList = useMemo(
    () =>
      reservationList.length ? (
        <ul>
          {reservationList.map(
            (
              { id, occupancy, adults, children, checkInDate, checkOutDate, review, photo, name }: ReservationItem,
              index,
            ) => (
              <li key={id}>
                <img src={photo} alt={name} />
                <div>
                  <span>{name}</span>
                  <span>
                    기준{adults + children}명 / 최대{occupancy}명
                  </span>
                  <span>이용 날짜</span>
                  <span>
                    {checkInDate}~ {checkOutDate}
                  </span>
                  <button onClick={() => selectItem(index)}>{!!review ? '후기 수정' : '후기 작성'}</button>
                </div>
              </li>
            ),
          )}
        </ul>
      ) : (
        <p>예약 내역이 존재하지 않습니다.</p>
      ),

    [reservationList],
  );

  return (
    <ReservationList>
      <h2>예약내역</h2>
      <DatePickerComponent
        startDate={startDate}
        setStartDate={setStartDate}
        endDate={endDate}
        setEndDate={setEndDate}
      />

      {showDialog && <PostingReview setDialog={setDialog} setReservationList={setReservationList} />}
      {memoizedList}
    </ReservationList>
  );
};

export default Reservations;
