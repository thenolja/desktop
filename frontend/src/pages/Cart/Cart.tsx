import SelectHotel from '../../components/Cart/SelectedHotel';
import { WrapperInput, SelectedPrice } from './Cart.style';
import { Buttons, SelectBtn } from '../../components/Room/Selector/Selector.style';
import Spinner from 'components/Spinner/Spinner';
import { getUserCart } from '../../utils/carts';
import { selectAuth, AuthType } from 'src/contexts/auth';
import { CartType } from 'src/contexts/shopping';
import { useAppSelector } from 'src/contexts/state.type';
import { useEffect, useState } from 'react';

const Cart = () => {
  const { id } = useAppSelector(selectAuth) as AuthType;
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [carts, setCarts] = useState<CartType[]>([]);
  const [totalCost, setTotalCost] = useState<number[]>();

  useEffect(() => {
    const responseCart = async () => {
      const response = await getUserCart(id);
      setCarts(response);
      setIsLoading(false);
    };
    responseCart();
    setTotalCost(carts.map(cart => cart.cost));
    setIsLoading(true);
  }, []);

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
              <SelectHotel infos={cart}></SelectHotel>
            ))}
          </div>
          <Buttons>
            <div>
              <SelectedPrice>
                <p>총 {carts.length}건</p>
                <p>{totalCost.reduce((acc, cur) => acc + cur)}원</p>
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
