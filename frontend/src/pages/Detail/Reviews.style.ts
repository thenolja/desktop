import styled from "styled-components";

const ReviewTitle = styled.section`
  margin: 0 auto;
  background: #fff;
`;

const ReviewCount = styled.span`
  font-size: 24px;
  line-height: 32px;
  color: #1a1a1a;
  font-weight: 700;

  span{
    font-weight: 400;
  }
`;

const ReviewList = styled.ul`  
  article{
    padding-top: 2rem;
    margin-top: 2rem;
    border-top: 1px solid #e6e6e6;
  }
`;

const Star = styled.div`
  position: relative;
  top:-10px;
  display: inline-block;
  color: #fc0;
  font-size: 32px;
  padding-bottom: 10px;
  text-align: center;
  margin-right: 10px;
`;

const Average = styled.span`
  font-size: 48px;
  font-weight: 700;

  span{
    font-size: 24px;
    font-weight: 400;
    color: #919191;
  }
`;

const ButtonWrapper = styled.div`
  margin: 50px 0;
  text-align: center;
`;

const Button = styled.button`
  background-color: #DE2E5F;
  width: 300px;
  height: 50px;
  color: #fff;
  font-size: 20px;
  font-weight: 700;
  cursor: pointer;
`;

export {ReviewTitle, ReviewCount, ReviewList, Star, Average, ButtonWrapper, Button};