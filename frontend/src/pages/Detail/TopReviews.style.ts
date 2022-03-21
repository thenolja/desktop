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

export {ReviewList, ButtonWrapper, Button};