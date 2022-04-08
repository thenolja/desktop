import styled from "styled-components";

const ModalBackground = styled.div`
  position: fixed;
  top:0;
  left:0;
  width:100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 99;
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

const ModalHeaderWrapper = styled.div`
  position: sticky;
  top: 0px;
  width: 100%;
  height: 60px;
  line-height: 60px;
  font-size: 18px;
  font-weight: 700;
  background-color: #fff;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.2);
  z-index: 100;
`;

const RoomImage = styled.img`
  width: 100%;
  height: 450px;
`;

const ModalBodyWrapper = styled.div`
  padding: 30px;
  text-align: left;
  position: relative;
  .amenities{
    text-align: center;
    display: inline-block;
    width: 100%;
    font-size: 22px;
    font-weight: 700;
    padding: 40px;  
  }
  
  .ratePlans{
    margin-top: 50px;
    
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

const ModalFooterWrapper = styled.div`
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

export { ModalBackground, RoomAmenity, ModalHeaderWrapper, CloseBtn, ModalBodyWrapper, RoomImage, ModalFooterWrapper, SelectBtn }