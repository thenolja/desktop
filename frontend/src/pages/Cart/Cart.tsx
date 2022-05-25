import SelectHotel from '../../components/Cart/SelectedHotel';
import swal from 'sweetalert';

import { WrapperInput, SelectedPrice, SelectedItem, EmptyWapper } from './Cart.style';
import { Buttons, SelectBtn } from '../../components/Room/Selector/Selector.style';
import Spinner from 'components/Spinner/Spinner';
import { CartType } from 'src/contexts/shopping';
import { useAppSelector } from 'src/contexts/state.type';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';
import { deleteUserCart, selectCart } from 'src/contexts/shopping';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { Div404 } from 'src/pages/NotFound/NotFound.style';

const Cart = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [carts, setCarts] = useState<CartType[]>([]);
  const [checkItem, setCheckItem] = useState<string[]>([]);
  const total = useAppSelector(selectCart) as CartType;
  const dispatch = useDispatch();

  useEffect(() => {
    const responseCart = () => {
      setCarts(total);
      setIsLoading(true);
    };
    responseCart();
    setIsLoading(false);
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

  const checkAllHandler = (checked: Boolean) => {
    if (checked) {
      const idxs = [];
      carts.forEach(cart => {
        idxs.push(cart.id);
        setCheckItem(idxs);
      });
    } else {
      setCheckItem([]);
    }
  };

  const checkHandler = (checked: Boolean, cartId: string) => {
    if (checked) {
      setCheckItem([...checkItem, ...cartId]);
    } else {
      setCheckItem(checkItem.filter(checkedId => checkedId !== cartId));
    }
  };
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : carts.length > 0 ? (
        <>
          <div>
            <WrapperInput>
              <input type="checkbox" id="total" onChange={e => checkAllHandler(e.target.checked)} />
              <label htmlFor="total">전체 선택</label>
              <button onClick={() => handleDeleteCart(checkItem.join(','))}>선택 삭제</button>
            </WrapperInput>
            {carts.map(cart => (
              <SelectedItem>
                <div className="chcekForm">
                  <input
                    type="checkbox"
                    id={`selectCart${cart.id}`}
                    checked={checkItem.indexOf(cart.id) === -1 ? false : true}
                    onChange={e => checkHandler(e.target.checked, cart.id)}
                  />
                  <label htmlFor={`selectCart${cart.id}`}></label>
                </div>
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
                <p>
                  {carts.length
                    ? carts
                        .map(cart => cart.cost)
                        .reduce((acc, cur) => acc + cur)
                        .toLocaleString('ko-KR')
                    : 0}
                  원
                </p>
              </SelectedPrice>
              <SelectBtn style={{ width: '60%' }}>예약하기</SelectBtn>
            </div>
          </Buttons>
        </>
      ) : (
        <EmptyWapper>
          <div>
            <Div404>
              <div>
                <img
                  src="https://item.kakaocdn.net/do/58119590d6204ebd70e97763ca933baf8f324a0b9c48f77dbce3a43bd11ce785"
                  alt="루피귀여워"
                />
              </div>
            </Div404>
          </div>
          <div>
            <p>장바구니가 비어있어요!!</p>
          </div>
        </EmptyWapper>
      )}
    </>
  );
};
export default Cart;
