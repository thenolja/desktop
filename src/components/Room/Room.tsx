import {RoomWrapper, Image, RoomInfo, RoomName, People, PriceInfo, OriginPrice, SaledPrice} from "./Room.style";

const Room = ({room,...restProps}) => {
 const {id, name, standardPeople, maxPeople, originPrice, percent, saledPrice} = room;
 
  return(
    <RoomWrapper key={id} {...restProps}>
      <Image>image</Image>
      <RoomInfo>
        <RoomName>{name}</RoomName>
        <People>기준 {standardPeople}명 / 최대 {maxPeople}명</People>
        <PriceInfo>
          <OriginPrice>{originPrice}원</OriginPrice>
          <SaledPrice><span>{percent}%</span>{saledPrice}원</SaledPrice>
        </PriceInfo>
      </RoomInfo>
    </RoomWrapper>
  );
};

export default Room;