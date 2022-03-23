const Reservation = () => {

  return(
    <div>
      <h2 className="srOnly">예약 페이지</h2>
      <form>
        <fieldset>
          <legend className="srOnly">이용자 정보</legend>
          <article>
            <h3>이용자 정보<span>*</span></h3>
            <div>상품 이용 시 필요한 필수 정보입니다.</div>
            <section>
              <label>
                <input type="checkbox" id="sameUser" value="" />
                예약자 정보와 동일합니다.
              </label>
            </section>
            <section>
              <label>성명<span>*</span>
                <input type="text" id="name" value="" placeholder="성명을 입력해주세요" />
              </label>
            </section>
            <section>
              <label>휴대폰 번호<span>*</span>
                <input type="tel" id="tel" value="" placeholder="휴대폰 번호를 입력해주세요" />
              </label>
            </section>
          </article>
          <article>
            <h3>숙소 방문 수단<span>*</span></h3>
            <select>
              <option>차량</option>
              <option>뚜벅이</option>
            </select>
          </article>
          <article>
            <h3>금액 및 할인 정보</h3>
            <section>
              <div>
                <span>총 예약 금액</span>
                <span>368,000원</span>
              </div>
              <div>
                <span>결제 금액</span>
                <span>368,000원</span>
              </div>
            </section>
          </article>
          <article>
            <h3>notice</h3>
            <div>
              <p><i>ⓘ</i>현장결제</p>
              <p>추가 인원 비용 등의 현장 결제 발생 상품을 확인하세요.</p>
              <p><i>ⓘ</i>취소 불가 및 수수료</p>
              <p>추가 및 환불 규정에 따라 취소 불가, 수수료가 발생할 수 있습니다.</p>
              <p><i>ⓘ</i>미성년자 및 법정 대리인 필수</p>
              <p>미성년자는 법정 대리인 동행 없이 투숙이 불가능합니다.</p>
            </div>
          </article>
          <article>
            <label>
              <input type="checkbox" id="totalAgree" />
              [필수] 전체 동의하기
            </label>
            <label>
              <input type="checkbox" id="totalAgree" />
              [필수] 만 14세 이상 이용 동의
            </label>
            <label>
              <input type="checkbox" id="totalAgree" />
              [선택] 이벤트, 혜택 정보 수신 동의
            </label>
            <label>
              <input type="checkbox" id="totalAgree" />
              [선택] 이벤트, 혜택 정보 전송을 위한 개인정보 수집 및 이용 동의
            </label>
            <p>이용규칙, 취소 및 환불 규칙, 개인정보 수집 및 이용 및 개인정보 제3자 제공에 동의하실 경우 결제하기를 클릭해주세요.</p>
          </article>
          <button type="submit">368,000원 결제하기</button>
          <p>(주)더놀자는 통신판매중개업자로서, 통신판매의 당사자가 아니라는 사실을 고지하며 상품의 결제, 이용 및 환불 등과 관련한 의무와 책임은 각 판매자에게 있습니다.</p>
        </fieldset>
      </form>
    </div>
  )
}

export default Reservation;