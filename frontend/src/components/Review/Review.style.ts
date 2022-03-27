import styled from "styled-components";


const ReviewLi = styled.ul`  
  article{
    padding-top: 2rem;
    margin-top: 2rem;
    border-top: 1px solid #e6e6e6;
  }
`;

const FlexBox = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 30px;

  div{
    width: 100%;
  }
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
  
  span:first-child{
    padding-right: 10px;
    margin-right: 10px;
    border-right: 1px solid #919191;
  }
`;

const Star = styled.i`
  color: #fc0;
`;

const MainWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`;

const Text = styled.div`
  width: 92%;
  font-size: 18px;
  line-height: 22px;
  color: #616161;
`;

const Button = styled.button`
  width: 70px;
  height: 30px;
  background-color: #DE2E5F;
  color: #fff;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
`;

const TopButton = styled.div`
width: 50px;
height: 50px;
border: 2px solid #fE8EBF;
border-radius: 50%;
position: fixed;
bottom: 100px;
right: 25px;
background-color: #DE2E5F;
color: white;
text-align: center;
line-height: 45px;
font-size: 14px;
font-weight: 700;
cursor: pointer;
/* display: none; */
`;

export {ReviewLi, FlexBox, Imoji, Time, Info, Text, Star, MainWrapper, Button, TopButton};