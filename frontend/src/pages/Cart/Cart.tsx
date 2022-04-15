import SelectHotel from '../../components/Cart/SelectedHotel';
import { WrapperInput, SelectedPrice } from './Cart.style';
import { Buttons, SelectBtn } from '../../components/Room/Selector/Selector.style';

const Cart = () => {
  return (
    <>
      <div>
        <WrapperInput>
          <input type="checkbox" id="total" />
          <label htmlFor="total">전체 선택</label>
          <button>선택 삭제</button>
        </WrapperInput>
        <SelectHotel></SelectHotel>
        <SelectHotel></SelectHotel>
      </div>
      <Buttons>
        <div>
          <SelectedPrice>
            <p>총 1건</p>
            <p>73,000원</p>
          </SelectedPrice>
          <SelectBtn style={{ width: '60%' }}>예약하기</SelectBtn>
        </div>
      </Buttons>
    </>
  );
};

export default Cart;
