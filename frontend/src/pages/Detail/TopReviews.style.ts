import styled from "styled-components";

const ReviewList = styled.ul`  
  article{
    padding-top: 2rem;
    margin-top: 2rem;
    border-top: 1px solid #e6e6e6;
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

  a{
    display: block;
  }
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

export {ReviewList, ButtonWrapper, Button, TopButton};