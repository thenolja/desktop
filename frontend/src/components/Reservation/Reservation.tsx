import { useEffect, useMemo, useState } from 'react';
import { useScrollPrevent } from 'src/hooks/useScroll';
import { selectAuth } from 'src/contexts/auth';
import { useAppSelector } from 'src/contexts/state.type';

import DatePickerComponent from './DatePicker';
import PostingReview from './PostingReview';

import swal from 'sweetalert';
import ReservationList from './Reservation.style';
import { getReservationByDate } from 'src/utils/reservations';
import { ReservationItem } from './Reservation.type';
import { deleteReview } from 'src/utils/reviews';
import { updateReview } from 'src/utils/users';

const Reservations = () => {
  const { id, nickname } = useAppSelector(selectAuth);

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

  const isValidateReservation = (date: string): boolean => new Date(date) < new Date();

  const postReview = (index: number): void => {
    sessionStorage.setItem('selectedItem', JSON.stringify(reservationList[index]));
    setDialog(true);
  };

  const handleDeleteReview = (selectedItem: number) => {
    swal({
      title: '삭제하시겠습니까?',
      icon: 'info',
      buttons: ['취소', '삭제'],
    }).then(result => {
      if (result) {
        updateReview(id, nickname);
        deleteReview(+selectedItem);
        setReservationList(prevList =>
          prevList.map(item => (item.id === selectedItem ? { ...item, review: null } : item)),
        );
      }
    });
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
                <div className="info-container">
                  <span>{name}</span>
                  <span>
                    기준{adults + children}명 / 최대{occupancy}명
                  </span>
                  <span>이용 날짜</span>
                  <span>
                    {checkInDate}~ {checkOutDate}
                  </span>
                  {isValidateReservation(checkOutDate) && (
                    <div className="button-group">
                      <button onClick={() => postReview(index)}>{!!review ? '후기 수정' : '후기 작성'}</button>
                      {!!review ? <button onClick={() => handleDeleteReview(id)}>후기 삭제</button> : ''}
                    </div>
                  )}
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
