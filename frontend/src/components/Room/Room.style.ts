import styled from "styled-components";

const RoomWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  padding: 20px 3%;
  border-bottom: 1px solid #f2f2f2;
  min-height: 250px;
  cursor: pointer;
`;

const Image = styled.div`
  width: 25%;
  min-width: 300px;
  min-height: 200px;
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
  font-size: 16px;
  color: #919191;
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

export {RoomWrapper, Image, RoomInfo, RoomName, People, PriceInfo, DailyPrice, TotalPrice};