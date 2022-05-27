import swal from 'sweetalert';
import { Buttons, SelectBtn, SelectCartBtn, Selected } from './Selector.style';
import { Link } from 'react-router-dom';
import { memo } from 'react';
import { SelectorType } from './Seletor.type';
import { selectAuth, AuthType } from 'src/contexts/auth';
import { useAppSelector } from 'src/contexts/state.type';
import { useDispatch } from 'react-redux';
import { registerUserCart, CartType } from 'src/contexts/shopping';

const SelectBar = ({ startDate, endDate, selectedRoom, hotelId, setSessionStorage }: SelectorType) => {
  const dispatch = useDispatch();
  const { id: userId } = useAppSelector(selectAuth) as AuthType;

  const handleAddCart = () => {
    console.log(selectedRoom);
    let newCart: CartType = {
      userId: userId,
      hotelId: hotelId,
      hotelName: window.sessionStorage.getItem('HOTEL_NAME'),
      roomName: selectedRoom.name,
      hotelAddress: window.sessionStorage.getItem('HOTEL_ADDRESS'),
      imageUrl: selectedRoom.images[1].thumbnailUrl,
      cost: selectedRoom.ratePlans[0].price.unformattedCurrent,
      checkInDate: startDate,
      checkOutDate: endDate,
      chekInTimeInfo: window.sessionStorage.getItem('HOTEL_CHECKINFO'),
    };

    swal({
      title: '장바구니에 해당 객실을 추가하시겠습니까?',
      icon: 'info',
      buttons: ['아니오', '예'],
    }).then(async result => {
      if (result) {
        dispatch(registerUserCart(newCart));
        swal({
          title: '장바구니에 상품이 담겼습니다.',
          icon: 'success',
          buttons: ['닫기', '장바구니 보기'],
        }).then(async result => {
          if (result) window.location.href = '/cart';
        });
      }
    });
  };

  return (
    <Buttons>
      {selectedRoom && selectedRoom.name ? (
        <>
          <Selected>
            현재 선택된 객실 : <span>{selectedRoom.name}</span>
          </Selected>
          <div>
            <SelectCartBtn onClick={handleAddCart}>장바구니 담기</SelectCartBtn>
            <Link to={`/reservation/${hotelId}`}>
              <SelectBtn onClick={setSessionStorage}>예약하기</SelectBtn>
            </Link>
          </div>
        </>
      ) : (
        <div>
          <SelectCartBtn disabled>장바구니 담기</SelectCartBtn>
          <SelectBtn disabled>예약하기</SelectBtn>
        </div>
      )}
    </Buttons>
  );
};

export default memo(SelectBar);
