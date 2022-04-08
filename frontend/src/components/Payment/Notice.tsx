import { memo } from 'react';
import { SectionTitle, FormArticle } from './Payment.style';

const Notice = () => {
  return (
    <FormArticle>
      <SectionTitle className="srOnly">notice</SectionTitle>
      <div className="notice">
        <h4>
          <i>ⓘ</i>현장결제
        </h4>
        <p>추가 인원 비용 등의 현장 결제 발생 상품을 확인하세요.</p>
        <h4>
          <i>ⓘ</i>취소 불가 및 수수료
        </h4>
        <p>추가 및 환불 규정에 따라 취소 불가, 수수료가 발생할 수 있습니다.</p>
        <h4>
          <i>ⓘ</i>미성년자 및 법정 대리인 필수
        </h4>
        <p>미성년자는 법정 대리인 동행 없이 투숙이 불가능합니다.</p>
      </div>
    </FormArticle>
  )
}

export default memo(Notice);