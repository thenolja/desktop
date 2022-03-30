import Agreement from 'components/Payment/Agreement';
import Notice from 'components/Payment/Notice';
import Policy from 'components/Payment/Policy';
import PriceInfo from 'components/Payment/PriceInfo';
import UserInfo from 'components/Payment/UserInfo';
import Visiting from 'components/Payment/Visiting';

const PaymentForm = ({ sumbmitBtn, handleClick, handleSubmit, reservation, setReservation, phone, cost }) => {

  return (
    <form>
      <fieldset>
        <legend className="srOnly">결제 정보</legend>
        <UserInfo reservation={reservation} setReservation={setReservation} phone={phone} />
        <Visiting reservation={reservation} setReservation={setReservation} />
        <PriceInfo cost={cost} />
        <Notice />
        <Agreement reservation={reservation} setReservation={setReservation} />
        <button type="submit" ref={sumbmitBtn} onClick={handleClick} onSubmit={handleSubmit}>{cost.toLocaleString()}원 결제하기</button>
        <Policy />
      </fieldset>
    </form>
  )
}

export default PaymentForm;