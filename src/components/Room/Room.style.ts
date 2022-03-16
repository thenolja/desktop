import styled from "styled-components";

const RoomWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  padding: 20px 0;
  border-bottom: 1px solid #f2f2f2;
  min-height: 250px;
  cursor: pointer;
`;

const Image = styled.div`
  width: 300px;
  height: 200px;
`;

const RoomInfo = styled.div`
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
  font-size: 14px;
  color: #aaa;
`;

const PriceInfo = styled.div`
  padding-top: 70px;
  float: right;
  text-align: right;
`;

const OriginPrice = styled.p`
  color: #919191;
  text-decoration: line-through;
`;

const SaledPrice = styled.p`
  font-size: 24px;
  font-weight: 500;
  margin-top: 24px;
  
  &::before{
    content: '판매가';
    position: relative;
    font-size: 16px;
    top: -26px;
    left: 160px;
  }

  span{
    color: #DE2E5F;
    display: inline-block;
    margin-right: 10px;
  }
`;

export {RoomWrapper, Image, RoomInfo, RoomName, People, PriceInfo, OriginPrice, SaledPrice};