import styled from "styled-components";

const ReviewCount = styled.span`
font-size: 24px;
line-height: 32px;
color: #1a1a1a;
font-weight: 700;

  span{
    font-weight: 400;
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

export { ReviewCount, Star, Average };