import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background: #f2f2f2;
  color: #4d4c4c;
  padding: 5%;
`;

const Address = styled.address`
  font-style: normal;
`;

const Span = styled.span`
  white-space: nowrap;
  &:not(:last-of-type):after {
    content: '|';
    margin: 0 10px;
  }
`;

const Small = styled.small`
  display: block;
  text-align: center;
  margin-top: 100px;
`;

const Footer = () => (
  <FooterWrapper>
    <h2>thenolja</h2>
    <Address>
      <Span>더놀자</Span>
      <Span>네카라쿠배 프론트엔드 3기</Span>
      <Span>사업자 등록번호 : 123-45-67890</Span>
      <Span>통신판매업신고 : 강남-11111호 </Span>
      <Span>메일: help @thenolja.com 관광사업자 등록번호 : 제2022-03호</Span>
      <Span>주소 : 서울 강남구 미왕빌딩 11층 호스팅서비스 제공자</Span>
      <Span>주식회사 더놀자 고객센터 : 1234-5678 (오전 9시 - 익일 새벽 3시)</Span>
    </Address>
    <Small>Copyright&#169;2022 thenolja All rights reserved.</Small>
  </FooterWrapper>
);

export default Footer;
