import styled from "styled-components";

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

export { ButtonWrapper, Button };