import { size } from 'lodash';
import {
  ReservationWrapper,
  SectionTitle,
  Guidance,
  FormArticle,
  Necessary,
  InputDiv,
  TotalWrapper,
} from './Reservation.style';

const Reservation = () => {
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
              <input type="checkbox" id="sameUser" value="" />
              <label for="sameUser">예약자 정보와 동일합니다.</label>
            </section>
            <section>
              <label for="name">
                성명<Necessary>*</Necessary>
              </label>
              <InputDiv>
                <input type="text" id="name" value="" placeholder="성명을 입력해주세요" />
              </InputDiv>
            </section>
            <section>
              <label for="tel">
                휴대폰 번호<Necessary>*</Necessary>
              </label>
              <InputDiv>
                <input type="tel" id="tel" value="" placeholder="휴대폰 번호를 입력해주세요" />
              </InputDiv>
            </section>
          </FormArticle>
          <FormArticle>
            <SectionTitle>
              숙소 방문 수단<Necessary>*</Necessary>
            </SectionTitle>
            <select>
              <option>차량</option>
              <option>도보</option>
            </select>
          </FormArticle>
          <FormArticle>
            <SectionTitle>금액 및 할인 정보</SectionTitle>
            <section>
              <TotalWrapper>
                <span>총 예약 금액</span>
                <span style={{ fontWeight: 700 }}>368,000원</span>
              </TotalWrapper>
              <TotalWrapper style={{ fontWeight: 700 }}>
                <span>결제 금액</span>
                <span style={{ color: '#de2e5f', fontSize: '18px' }}>368,000원</span>
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
                <input type="checkbox" id="total" />
                <label for="total">전체 동의하기</label>
              </div>
              <div className="agreeSection">
                <input type="checkbox" id="agree1" />
                <label for="agree1"> [필수] 만 14세 이상 이용 동의</label>
              </div>
              <div className="agreeSection">
                <input type="checkbox" id="agree2" />
                <label for="agree2"> [선택] 이벤트, 혜택 정보 수신 동의</label>
              </div>
              <div className="agreeSection">
                <input type="checkbox" id="agree3" />
                <label for="agree3"> [선택] 이벤트, 혜택 정보 전송을 위한 개인정보 수집 및 이용 동의</label>
              </div>
            </section>
            <p>
              이용규칙, 취소 및 환불 규칙, 개인정보 수집 및 이용 및 개인정보 제3자 제공에 동의하실 경우 결제하기를
              클릭해주세요.
            </p>
          </FormArticle>
          <button type="submit">368,000원 결제하기</button>
          <p>
            (주)더놀자는 통신판매중개업자로서, 통신판매의 당사자가 아니라는 사실을 고지하며 상품의 결제, 이용 및 환불
            등과 관련한 의무와 책임은 각 판매자에게 있습니다.
          </p>
        </fieldset>
      </form>
    </ReservationWrapper>
  );
};

export default Reservation;
