import { RoomInfoDiv, RoomName } from './Room.style';
import { RoomInfoType } from './Room.types';
import { RoomOccupancy } from './RoomOccupancy';
import { RoomPriceInfo } from './RoomPriceInfo';

export const RoomInfo =({name, maxOccupancy, price}:RoomInfoType):JSX.Element=>{
  return(
    <RoomInfoDiv>
      <RoomName>{name}</RoomName>
      <RoomOccupancy maxOccupancy={maxOccupancy} />
      <RoomPriceInfo price={price} />
    </RoomInfoDiv>
  )
}
