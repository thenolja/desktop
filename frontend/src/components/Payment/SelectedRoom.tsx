import { memo } from "react";
import { FormArticle, Wrapper, SectionTitle, SelectedInfo } from "./Payment.style";
import { SelectedRoomType } from "./Payment.type";


const SelectedRoom=({selectedRoom}:SelectedRoomType)=>{
  return(
    <FormArticle>
      <Wrapper>
        <SectionTitle>선택한 객실 정보</SectionTitle>
        <div>
          <img src={selectedRoom.photo} alt={selectedRoom.name} />
        </div>
        <SelectedInfo>
          <p className="hotelName">{selectedRoom.hotelName}</p>
          <p>[ {selectedRoom.name} ]</p>
          <p>{selectedRoom.checkIn} - {selectedRoom.checkOut}</p>
        </SelectedInfo>
      </Wrapper>
    </FormArticle>
  )
}

export default memo(SelectedRoom);