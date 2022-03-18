import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background: #f2f2f2;
  color: #4d4c4c;
  padding: 50px 5%;

  h2{
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 20px;
  }

  address{
    font-style: normal;
  }
  
  span{
    white-space: nowrap;
    line-height: 2rem;
    &:not(:last-of-type):after {
      content: '|';
      margin: 0 10px;
    }
  }

  small{
    display: block;
    text-align: center;
    margin-top: 100px;
  }
`;

export default FooterWrapper;