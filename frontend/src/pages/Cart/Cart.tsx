import SelectHotel from '../../components/Cart/SelectedHotel';
import swal from 'sweetalert';

import { WrapperInput, SelectedPrice, SelectedItem } from './Cart.style';
import { Buttons, SelectBtn } from '../../components/Room/Selector/Selector.style';
import Spinner from 'components/Spinner/Spinner';
import { CartType } from 'src/contexts/shopping';
import { useAppSelector } from 'src/contexts/state.type';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';
import { fetchCarts, deleteUserCart } from 'src/contexts/shopping';
import { selectAuth, AuthType } from 'src/contexts/auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';

const Cart = () => {
  const { id } = useAppSelector(selectAuth) as AuthType;
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [carts, setCarts] = useState<CartType[]>([]);
  const [totalCost, setTotalCost] = useState<number>();
  const dispatch = useDispatch();

  useEffect(() => {
    const responseCart = async () => {
      const response = await dispatch(fetchCarts(id));
      const resultcarts = unwrapResult(response);
      console.log(resultcarts);
      setCarts(resultcarts);
      setIsLoading(false);
    };
    responseCart();
    setTotalCost(carts.map(cart => cart.cost.replace('₩', '')).reduce((acc, cur) => acc + cur));
    setIsLoading(true);
  }, []);

  const handleDeleteCart = (selectedItem: string) => {
    swal({
      title: '삭제하시겠습니까?',
      icon: 'info',
      buttons: ['취소', '삭제'],
    }).then(async result => {
      if (result) {
        const response = await dispatch(deleteUserCart(selectedItem));
        const myCarts = unwrapResult(response);
        setCarts(myCarts);
      }
    });
  };

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : carts ? (
        <>
          <div>
            <WrapperInput>
              <input type="checkbox" id="total" />
              <label htmlFor="total">전체 선택</label>
              <button>선택 삭제</button>
            </WrapperInput>
            {carts.map(cart => (
              <SelectedItem>
                <SelectHotel infos={cart} key={cart.id} />
                <button
                  onClick={() => {
                    handleDeleteCart(cart.id);
                  }}
                >
                  <FontAwesomeIcon icon={faX} size="lg" />
                </button>
              </SelectedItem>
            ))}
          </div>
          <Buttons>
            <div>
              <SelectedPrice>
                <p>총 {carts.length}건</p>
                <p>{totalCost}원</p>
              </SelectedPrice>
              <SelectBtn style={{ width: '60%' }}>예약하기</SelectBtn>
            </div>
          </Buttons>
        </>
      ) : (
        <div>'장바구니가 비어있어요!'</div>
      )}
    </>
  );
};
export default Cart;
