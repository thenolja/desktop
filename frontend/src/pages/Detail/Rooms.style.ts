import styled from "styled-components";

const Buttons = styled.section`
  width: 100%;
  height: fit-content;
  text-align: center;
  background-color: #fff;
  position: sticky;
  bottom:0;
  box-shadow: 0px -7px 12px -7px rgba(0, 0, 0, 0.2);
  z-index: 1;
  `;

const SelectBtn = styled.button`
  background-color: #DE2E5F;
  margin: 30px 0;
  border: 0.1rem solid #DE2E5F;
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

const Selected = styled.div`
  font-size: 20px;
  color: #181818;
  padding-top: 30px;
  font-weight: 700;
  
  span{
    font-size: 20px;
    color: #0152cc;
  }
`;

const NotFoundRooms = styled.div`
  text-align: center;
  margin: 100px 0;
  font-size: 20px;
  line-height: 30px;
`;

export {Buttons, SelectBtn, Selected, NotFoundRooms};