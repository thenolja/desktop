import styled from "styled-components";
import {len} from "./Room.types";

const Selector = styled.div`
  width: 100%;
  height: 94%;
  position: absolute;
  cursor: pointer;
  top:3%;
  left:0;
  background-color: transparent;

  &:hover{
    border: 2px solid #DE2E5F;
    border-radius: 5px;
  }

  &:active {
    border: 4px solid #DE2E5F;
    border-radius: 5px;
  }
`;

const RoomWrapper = styled.div`
  position: relative;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  padding: 20px 3%;
  border-bottom: 1px solid #f2f2f2;
  min-height: 250px;
`;

const Image = styled.div`
  width: 25%;
  min-width: 300px;
  min-height: 200px;
`;

const RoomInfoDiv = styled.div`
  height: 100%;
  width: 62%;
  padding-left: 1rem;
`;

const RoomName = styled.h3`
  line-height: 30px;
  font-size: 24px;
  font-weight: 700;
  width: 100%;
`;

const People = styled.p`
  line-height: 20px;
  font-size: 16px;
  color: #919191;
`;

const NoImage = styled.img`
  width: 60px;
  height: 60px;
`;

const ModalBackground = styled.div`
  position: fixed;
  top:0;
  left:0;
  width:100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 99;
`;

const ModalHeader = styled.div`
  position: sticky;
  top: 0px;
  width: 100%;
  height: 60px;
  line-height: 60px;
  font-size: 18px;
  font-weight: 700;
  background-color: #fff;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.2);
`;

const RoomAmenity = styled.div`
  position: fixed;
  top: 100px;
  left: 50%;
  transform: translateX(-50%);
  width: 700px;
  height: 700px;
  background-color: #fff;
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.4);
  text-align: center;
  overflow-y: scroll;
  z-index: 100;
`;

const RoomImages = styled.div`
  overflow-x: scroll;
  overflow-y: hidden;
  div {
    width: ${ (props:len) => props.length * 410}px;
    height: fit-content;
  }
`;

const RoomImage = styled.img`
  display: inline;
  width: 400px;
  height: 300px;
  margin: 0 5px;
`;

const ModalBody = styled.div`
  padding: 30px;
  text-align: left;
  
  .amenities{
    text-align: center;
    display: inline-block;
    width: 100%;
    font-size: 22px;
    font-weight: 700;
    padding: 40px;  
  }
  
  .ratePlans{
    margin-top: 20px;
    span{
      display: block;
      margin:10px;
      line-height: 20px;
      font-size: 18px;
    }
    .title{
      margin-top: 20px;
      font-weight: 700;
    }
  }

  p::before{
    content: "ㆍ";
    font-size: 24px;
    line-height: 30px;
  }
  p{
    font-size: 18px;
    line-height: 30px;
    display: inline-block;
    width: 50%;
  }
`;

const CloseBtn = styled.div`
  background-image: url('https://cdn-icons-png.flaticon.com/512/1828/1828778.png');
  background-size: cover;
  position: absolute;
  width: 20px;
  height: 20px;
  top:20px;
  right: 20px;
  font-size: 24px;
  cursor: pointer;
`;

const ModalFooter = styled.div`
  position: sticky;
  bottom: 0px;
  width: 100%;
  height: 50px;
  background-color: #fff;
  box-shadow: 0px -5px 10px 0px rgba(0, 0, 0, 0.2);
`;

const SelectBtn = styled.button`
  width: 100%;
  height: 50px;
  background-color: #DE2E5F;
  color: #fff;
  font-size: 18px;
  font-weight: 700;
  border-radius: 3px;
  border-bottom: 1px solid #faa;
  cursor: pointer;
`;

const PriceInfo = styled.div`
  padding-top: 70px;
  float: right;
  text-align: right;
  line-height: 24px;
`;

const TotalPrice = styled.p`
  font-weight: 700;
`;

const DailyPrice = styled.p`
  font-size: 24px;
  font-weight: 700;
  color: #DE2E5F;
`;

export {Selector, RoomWrapper, NoImage, Image, ModalBackground, ModalHeader, ModalBody, ModalFooter, CloseBtn, RoomAmenity, RoomImages, RoomImage, SelectBtn, RoomInfoDiv, RoomName, People, PriceInfo, DailyPrice, TotalPrice};