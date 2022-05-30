import Agreement from 'components/Payment/Agreement';
import Notice from 'components/Payment/Notice';
import Policy from 'components/Payment/Policy';
import PriceInfo from 'components/Payment/PriceInfo';
import UserInfo from 'components/Payment/UserInfo';
import Visiting from 'components/Payment/Visiting';
import { memo } from 'react';
import { SelectedBody } from './Payment.style';
import { FormType } from './Payment.type';
import SelectedRoom from './SelectedRoom';

const PaymentForm = ({ data, sumbmitBtn, handleButton, handleSubmit, handleAgree, handleVisited, reservation, cost,handleUserClick, handleUserInput }) => {
  return (
    <form>
      <fieldset>
        <legend className="srOnly">결제 정보</legend>
        <SelectedRoom data={data} />
        <UserInfo username={reservation.username} phone={reservation.phone} handleUserClick={handleUserClick} handleUserInput={handleUserInput} />
        <Visiting hasCar={reservation.hasCar} handleVisited={handleVisited} />
        <PriceInfo cost={cost} />
        <Notice />
        <Agreement handleAgree={handleAgree} />
        <button type="submit" ref={sumbmitBtn} onClick={handleButton} onSubmit={handleSubmit}>{cost.toLocaleString()}원 결제하기</button>
        <Policy />
      </fieldset>
    </form>
  )
}

export default memo(PaymentForm);