import { memo } from "react";
import {RoomWrapper, Image, RoomInfo, RoomName, People, PriceInfo, DailyPrice, TotalPrice} from "./Room.style";

const Room = ({room}) => {
  return(
    <li>
      <RoomWrapper>
        <Image>
          {
          room.images[0]?
            <img src={room.images[0].fullSizeUrl}></img>
          :
            <img src={'https://img.icons8.com/ios/344/no-image.png'} style={{width:"30px", height: "30px"}}></img>
          }
        </Image>
        <RoomInfo>
          <RoomName>{room.name}</RoomName>
          {room.maxOccupancy && <People>기준 {room.maxOccupancy.children}명 / 최대 {room.maxOccupancy.total}명</People>}
          <PriceInfo>
            {
              room.ratePlans[0].price.nightlyPriceBreakdown?
              <>
                <span>{room.ratePlans[0].price.nightlyPriceBreakdown.additionalColumns[1].heading}</span>
                <TotalPrice>{room.ratePlans[0].price.nightlyPriceBreakdown.additionalColumns[1].value}원</TotalPrice>
              </>
              :
              <>
                <span>총 1박</span>
                <TotalPrice>{room.ratePlans[0].price.current}원</TotalPrice>
              </>
            }
            <span>1박당 요금</span>
            <DailyPrice>{room.ratePlans[0].price.current}원</DailyPrice>
          </PriceInfo>
        </RoomInfo>
      </RoomWrapper>
    </li>
  );
};

export default memo(Room);