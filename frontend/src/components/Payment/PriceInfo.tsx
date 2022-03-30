import { memo } from 'react';
import { SectionTitle, FormArticle, TotalWrapper } from './Payment.style';

const PriceInfo = ({ cost }) => {
  return (
    <FormArticle>
      <SectionTitle>금액 및 할인 정보</SectionTitle>
      <section>
        <TotalWrapper>
          <span>총 예약 금액</span>
          <span style={{ fontWeight: 700 }}>{cost.toLocaleString()}원</span>
        </TotalWrapper>
        <TotalWrapper style={{ fontWeight: 700 }}>
          <span>결제 금액</span>
          <span style={{ color: '#de2e5f', fontSize: '18px' }}>{cost.toLocaleString()}원</span>
        </TotalWrapper>
      </section>
    </FormArticle>
  )
}

export default memo(PriceInfo);