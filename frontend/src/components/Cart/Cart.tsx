import SelectHotel from '../Cart/SelectedHotel';
import { Wrapper, FormArticle } from '../Payment/Payment.style';

const Cart = () => {
  return (
    <FormArticle>
      <Wrapper>
        <div>
          <input type="checkbox" id="total" />
          <label htmlFor="total">전체 선택</label>
        </div>
        <div>
          <button>선택 삭제</button>
        </div>
      </Wrapper>
      <SelectHotel></SelectHotel>
    </FormArticle>
  );
};

export default Cart;
