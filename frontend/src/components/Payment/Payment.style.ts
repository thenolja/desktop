import styled from 'styled-components';

export const FormArticle = styled.article`
  display: flex;
  flex-direction: column;
  padding-bottom: 12px;
  border-bottom: 1px solid #eee;
  margin: 20px 0px;

  p {
    font-size: 14px;
  }
`;

export const SectionTitle = styled.h3`
  color: #1a1a1a;
  font-size: 20px;
  padding: 15px 0px;
  font-weight: 700;
`;

export const SectionBody = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 10px 0;
  
  div{
    width: 100%;
  }
`;

export const Guidance = styled.div`
  background-color: #f2f2f2;
  border-radius: 4px;
  font-size: 14px;
  line-height: 15.96px;
  padding: 10px;
  margin-bottom: 10px;
`;

export const Necessary = styled.span`
  color: #de2e5f;
`;

export const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #ffffff;
  border-bottom-color: #4d4c4c;
  padding: 8px 0px;
  line-height: 21px;

  input{
    font-size: 14px;
  }
`;

export const TotalWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0px;

  span:second-child {
    font-weight: 700;
  }
`;

export const PaymentPolicy = styled.p`
  font-size: 14px;
  color: #555;
  line-height: 20px;
  margin-bottom: 10px;
`;

export const SelectedWrapper = styled.div`
  margin: 0 5%;
`;

export const SelectedInfo = styled.div`
  p{
    font-size: 16px;
    line-height: 24px;
    margin-top: 3px;
  }
  .hotelName{
    font-weight: 700;
    margin-bottom: 5px;
  }
`;

export const Wrapper = styled.div`
  margin:0 auto;
`;

export const SelectedBody = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;

  article:first-child{
    width: 100%;
    margin-right: 30px;
    height: 100%;
  }

  article:last-child{
    max-width: 400px;
    width: 35%;
    min-width: 250px;
    height: 335px;

    img{
      width: 260px;
    }
  }
`;