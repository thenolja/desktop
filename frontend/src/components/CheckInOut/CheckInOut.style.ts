import styled from "styled-components";

const CheckInOutWrapper = styled.section`
  padding: 16px 0;
  margin: 0 2px;
  border-top: 1px solid hsla(0,0%,82.7%,.5);
  border-bottom: 1px solid hsla(0,0%,82.7%,.5);

  & > div{
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    gap: 8px;
  }
`;

const Check = styled.div`
  position: relative;
  text-align: center;
  width: 45%;
  cursor: pointer;
  font-size: 16px;
  line-height: 20px;
  color: #919191;
`;

const DatePick = styled.div`
  font-size: 24px;
  line-height: 32px;
  color: #0152cc;
`;

const SVG = styled.svg`
  width: 24px;
  height: 24px;
  position: relative;
  top: 3px;
  margin-left: 6px;
  fill: currentColor;
`;

const Contour = styled.div`
  text-align: center;
  width: 1px;
  -webkit-transform: rotate(20deg);
  transform: rotate(20deg);
  background: #ccc;
`;

export {CheckInOutWrapper, Check, DatePick, SVG, Contour};