import styled from "styled-components";

const FlexBox = styled.div`
  display: flex;
  gap: 20px;
`;

const Imoji = styled.span`
  width: 50px;
  height: 50px;
  background-repeat: no-repeat;
  background-size: contain;
`;

const Time = styled.span`
  font-size: 16px;
  color: #919191;
  float: right;
`;

const Info = styled.div`
  font-size: 16px;
  line-height: 18px;
  word-break: break-all;
  color: #919191;
  margin-top: 0.4rem;

  span{
    margin-right: 10px;
  }
`;

const Text = styled.div`
  margin-top: 20px;
  font-size: 18px;
  line-height: 22px;
  color: #616161;
`;

const Star = styled.i`
  color: #fc0;
`;

export {FlexBox, Imoji, Time, Info, Text, Star};