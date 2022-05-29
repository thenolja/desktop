import { memo } from "react";
import { FormArticle, SectionTitle } from "./Payment.style";
import SelectedRoomItem from "./SelectedRoomItem";


const SelectedRoom=({data})=>{
  return(
    <FormArticle>
      <SectionTitle>선택한 객실 정보</SectionTitle>
      {data.map(selectedRoom =><SelectedRoomItem key={selectedRoom.name} selectedRoom={selectedRoom} /> )}
    </FormArticle>
  )
}

export default memo(SelectedRoom);