import {RoomWrapper, Image, RoomInfo, RoomName, People, PriceInfo, OriginPrice, SaledPrice} from "./Room.style";
import {RoomProps} from './Room.types';

const Room = (room: RoomProps) => {
  const {name, standardPeople, maxPeople, originPrice, percent, saledPrice}=room;
  
  return(
    <li>
      <RoomWrapper>
        <Image>image</Image>
        <RoomInfo>
          <RoomName>{name}</RoomName>
          <People>기준 {standardPeople}명 / 최대 {maxPeople}명</People>
          <PriceInfo>
            <OriginPrice>{originPrice.toLocaleString()}원</OriginPrice>
            <span>판매가</span>
            <SaledPrice><span>{percent}%</span>{saledPrice.toLocaleString()}원</SaledPrice>
          </PriceInfo>
        </RoomInfo>
      </RoomWrapper>
    </li>
  );
};

export default Room;