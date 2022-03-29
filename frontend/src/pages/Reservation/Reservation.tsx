import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { selectAuth } from 'src/contexts/auth';
import { useAppSelector } from 'src/contexts/state.type';
import {
  ReservationWrapper,
  SectionTitle,
  SectionBody,
  Guidance,
  FormArticle,
  Necessary,
  InputDiv,
  TotalWrapper,
  PaymentPolicy
} from './Reservation.style';

const Reservation = () => {

  const { id:hotelId }=useParams();

 // 스토리지에서 받아오기
  const selectedRoom = {
    checkIn: '2020-01-01',
    checkOut: '2020-10-10',
    cost: 10000,
    occupancy: 2,
    adults: 1,
    children: 1,
    spec: '[room spec]'
  };

  // ================ 데이터 받아오는 형식 정해진 후 하기 ====================

  const { id:userId, nickname, email, phone } = useAppSelector(selectAuth);

  const [sameUser, setSameUser]=useState(false);

  const [reservation, setReservation]=useState({
    userId : userId,
    hotelId : hotelId,
    isAgrees : [false, false, false],
    checkInDate : selectedRoom.checkIn,
    checkOutDate : selectedRoom.checkOut,
    hasCar :  true,
    cost : selectedRoom.cost,
    occupancy : selectedRoom.occupancy,
    adults : selectedRoom.adults,
    children : selectedRoom.children,
    spec : selectedRoom.spec,
    username :  '',
    phone :  null,
  });

  const carRef=useRef();
  const totalAgree=useRef();
  const agrees=useRef([]);
  const sumbmitBtn=useRef();

  // 숙소 방문 수단을 기본적으로 차량으로 세팅
  useEffect(()=>{
    carRef.current.checked=reservation.hasCar;
  }, []);

  const handleClick=()=>{
    setReservation({
      ...reservation,
        phone: !sameUser ? phone : ''
      })
      
    setSameUser(!sameUser)
  }

  const handleInput = e => {
    setReservation({
      ...reservation,
      [e.target.id]: e.target.value
    })
  }
  
  const handleVisited = e => {
    setReservation({
      ...reservation,
      hasCar: carRef.current.checked
    })
  }

  const handleAgree = e => {
    if(e.target.id==='total'){
      // 전체 동의하기에 따라 선택사항 체크박스 활성화
      setReservation({
        ...reservation,
        isAgrees:e.target.checked?[true, true, true]:[false, false, false]
      })
      agrees.current.forEach(agree => agree.checked=e.target.checked);
    } else{
      const agreeArr=agrees.current.map(agree => agree.checked);
      // 선택사항이 모두 체크되었을 때, 전체 동의하기 활성화 (!(3-true의 개수)=> 하나라도 false일 경우 false)
      totalAgree.current.checked=Boolean(!(3-agreeArr.reduce((sum,acc)=>sum+= +acc,0)));
      setReservation({
        ...reservation,
        isAgrees:agreeArr
      })
    }
  }

  useEffect(()=>{
    // 모든 필수 입력이 입력되었을 때만 결제 버튼 활성화
    sumbmitBtn.current.disabled = !(reservation.username && reservation.phone && reservation.isAgrees[0]);
    
  },[reservation]);

  return (
    <ReservationWrapper>
      <h2 className="srOnly">예약 페이지</h2>
      <form>
        <fieldset>
          <legend className="srOnly">이용자 정보</legend>
          <FormArticle>
            <SectionTitle>
              이용자 정보<Necessary>*</Necessary>
            </SectionTitle>
            <Guidance>상품 이용 시 필요한 필수 정보입니다.</Guidance>
            <section>
              <input type="checkbox" id="sameUser" onClick={handleClick} />
              <label htmlFor="sameUser">예약자 정보와 동일합니다.</label>
            </section>
            <section>
              <label htmlFor="username">
                성명<Necessary>*</Necessary>
              </label>
              <InputDiv>
                <input type="text" id="username" value={reservation.username} onInput={handleInput} placeholder="성명을 입력해주세요" />
              </InputDiv>
            </section>
            <section>
              <label htmlFor="phone">
                휴대폰 번호<Necessary>*</Necessary>
              </label>
              <InputDiv>
                <input type="tel" id="phone" value={reservation.phone} onInput={handleInput} placeholder="휴대폰 번호를 입력해주세요" />
              </InputDiv>
            </section>
          </FormArticle>
          <FormArticle>
            <SectionTitle>
              숙소 방문 수단<Necessary>*</Necessary>
            </SectionTitle>
            <SectionBody>
              <div className="visited">
                <input type="radio" ref={carRef} name="visited" id="car" value="car" onChange={handleVisited} />
                <label htmlFor="car">차량</label>
              </div>
              <div className="visited">
                <input type="radio" name="visited" id="work" value="work" onChange={handleVisited} />
                <label htmlFor="work">도보</label>
              </div>
            </SectionBody>
          </FormArticle>
          <FormArticle>
            <SectionTitle>금액 및 할인 정보</SectionTitle>
            <section>
              <TotalWrapper>
                <span>총 예약 금액</span>
                <span style={{ fontWeight: 700 }}>{selectedRoom.cost}원</span>
              </TotalWrapper>
              <TotalWrapper style={{ fontWeight: 700 }}>
                <span>결제 금액</span>
                <span style={{ color: '#de2e5f', fontSize: '18px' }}>{selectedRoom.cost}원</span>
              </TotalWrapper>
            </section>
          </FormArticle>
          <FormArticle>
            <SectionTitle className="srOnly">notice</SectionTitle>
            <div className="notice">
              <h5>
                <i>ⓘ</i>현장결제
              </h5>
              <p>추가 인원 비용 등의 현장 결제 발생 상품을 확인하세요.</p>
              <h5>
                <i>ⓘ</i>취소 불가 및 수수료
              </h5>
              <p>추가 및 환불 규정에 따라 취소 불가, 수수료가 발생할 수 있습니다.</p>
              <h5>
                <i>ⓘ</i>미성년자 및 법정 대리인 필수
              </h5>
              <p>미성년자는 법정 대리인 동행 없이 투숙이 불가능합니다.</p>
            </div>
          </FormArticle>

          <FormArticle>
            <section>
              <div>
                <input type="checkbox" id="total" ref={totalAgree} onChange={handleAgree} />
                <label htmlFor="total">전체 동의하기</label>
              </div>
              <div className="agreeSection">
                <input type="checkbox" id="agree1" ref={agree=>agrees.current[0]=agree} onChange={handleAgree} />
                <label htmlFor="agree1"> [필수] 만 14세 이상 이용 동의</label>
              </div>
              <div className="agreeSection">
                <input type="checkbox" id="agree2" ref={agree=>agrees.current[1]=agree} onChange={handleAgree} />
                <label htmlFor="agree2"> [선택] 이벤트, 혜택 정보 수신 동의</label>
              </div>
              <div className="agreeSection">
                <input type="checkbox" id="agree3" ref={agree=>agrees.current[2]=agree} onChange={handleAgree} />
                <label htmlFor="agree3"> [선택] 이벤트, 혜택 정보 전송을 위한 개인정보 수집 및 이용 동의</label>
              </div>
            </section>
            <p>
              이용규칙, 취소 및 환불 규칙, 개인정보 수집 및 이용 및 개인정보 제3자 제공에 동의하실 경우 결제하기를
              클릭해주세요.
            </p>
          </FormArticle>
          <button type="submit" ref={sumbmitBtn} disabled>{selectedRoom.cost}원 결제하기</button>
          <PaymentPolicy>
            (주)더놀자는 통신판매중개업자로서, 통신판매의 당사자가 아니라는 사실을 고지하며 상품의 결제, 이용 및 환불
            등과 관련한 의무와 책임은 각 판매자에게 있습니다.
          </PaymentPolicy>
        </fieldset>
      </form>
    </ReservationWrapper>
  );
};

export default Reservation;
