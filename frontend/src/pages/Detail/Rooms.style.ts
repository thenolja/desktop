import styled from "styled-components";

const Buttons = styled.section`
  width: 100%;
  height: 140px;
  text-align: center;
  padding: 40px 0;
  background-color: #fff;
  position: sticky;
  bottom:0;
  left:0;
  `;

const SelectBtn = styled.button`
  background-color: #DE2E5F;
  border: 0.1rem solid #de2e5f;
  color: white;
  width: 60%;
  min-width: 300px;
  height: 60px;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  &{
    font-weight: 700;
  }

  &:disabled{
    cursor: not-allowed;
    background-color: #919191;
    border: 0.1rem solid #ccc;
  }
`;



export {Buttons, SelectBtn};