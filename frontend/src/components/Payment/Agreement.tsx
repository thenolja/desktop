import { memo, useCallback, useRef } from "react";
import { FormArticle } from "./Payment.style";
import { AgreeType } from "./Payment.type";

const Agreement = ({ handleAgree }:AgreeType) => {

  const totalAgree = useRef<HTMLInputElement>();
  const agrees = useRef<HTMLInputElement[]>([]);

  const handleClick = useCallback((e: any) => {
    if (e.target.id === 'total') {
      // 전체 동의하기에 따라 선택사항 체크박스 활성화
      handleAgree(e.target.checked ? [true, true, true] : [false, false, false]);
      agrees.current.forEach(agree => agree.checked = e.target.checked);
    } else {
      const agreeArr = agrees.current.map(agree => agree.checked);
      // 선택사항이 모두 체크되었을 때, 전체 동의하기 활성화 (!(3-true의 개수)=> 하나라도 false일 경우 false)
      totalAgree.current.checked = Boolean(!(3 - agreeArr.reduce((sum, acc) => sum += +acc, 0)));
      handleAgree(agreeArr);
    }
  },[totalAgree, agrees]);

  return (
    <FormArticle>
      <section>
        <div>
          <input type="checkbox" id="total" ref={totalAgree} onClick={handleClick} />
          <label htmlFor="total">전체 동의하기</label>
        </div>
        <div className="agreeSection">
          <input type="checkbox" id="agree1" ref={agree => agrees.current[0] = agree} onClick={handleClick} />
          <label htmlFor="agree1"> [필수] 만 14세 이상 이용 동의</label>
        </div>
        <div className="agreeSection">
          <input type="checkbox" id="agree2" ref={agree => agrees.current[1] = agree} onClick={handleClick} />
          <label htmlFor="agree2"> [선택] 이벤트, 혜택 정보 수신 동의</label>
        </div>
        <div className="agreeSection">
          <input type="checkbox" id="agree3" ref={agree => agrees.current[2] = agree} onClick={handleClick} />
          <label htmlFor="agree3"> [선택] 이벤트, 혜택 정보 전송을 위한 개인정보 수집 및 이용 동의</label>
        </div>
      </section>
      <p>
        이용규칙, 취소 및 환불 규칙, 개인정보 수집 및 이용 및 개인정보 제3자 제공에 동의하실 경우 결제하기를
        클릭해주세요.
      </p>
    </FormArticle>
  )
}

export default memo(Agreement);