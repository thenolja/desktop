import { memo } from "react";
import {RoomWrapper, Image, RoomInfo, RoomName, People, PriceInfo, OriginPrice, SaledPrice} from "./Room.style";

const Room = ({room}) => {

  return(
    <li>
      <RoomWrapper>
        <Image><img src={room.images[0].fullSizeUrl}></img></Image>
        <RoomInfo>
          <RoomName>{room.name}</RoomName>
          <People>기준 {room.maxOccupancy.children}명 / 최대 {room.maxOccupancy.total}명</People>
          <PriceInfo>
            <OriginPrice>{room.ratePlans[0].price.unformattedCurrent.toLocaleString()}원</OriginPrice>
            <span>판매가</span>
            <SaledPrice><span>0%</span>{room.ratePlans[0].price.unformattedCurrent.toLocaleString()}원</SaledPrice>
          </PriceInfo>
        </RoomInfo>
      </RoomWrapper>
    </li>
  );
};

export default memo(Room);