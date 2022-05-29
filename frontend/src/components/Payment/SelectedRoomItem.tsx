import { memo } from "react";
import { SelectedRoomType } from "./Payment.type";
import { SelectedBody, SelectedInfos, SelectedInfo } from "./Payment.style";

const SelectedRoomItem=({selectedRoom}:SelectedRoomType)=>{
  return(
    <SelectedBody>
      <img src={selectedRoom.photo} alt={selectedRoom.name} />
      <SelectedInfos>
        <SelectedInfo>
          <p className="hotelName">{selectedRoom.hotelName}</p>
          <p>[ {selectedRoom.name} ]</p>
          <p>{selectedRoom.checkIn} - {selectedRoom.checkOut}</p>
        </SelectedInfo>
        <SelectedInfo>
          <p className="eachCost">{selectedRoom.cost.toLocaleString()}원</p>
        </SelectedInfo>
      </SelectedInfos>
    </SelectedBody>
  )
}

export default memo(SelectedRoomItem);