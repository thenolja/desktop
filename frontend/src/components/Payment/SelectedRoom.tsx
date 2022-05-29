import { memo } from "react";
import { FormArticle, SectionTitle } from "./Payment.style";
import SelectedRoomItem from "./SelectedRoomItem";


const SelectedRoom=({data})=>{
  return(
    <FormArticle>
      <SectionTitle>상품 정보 {data.length}건</SectionTitle>
      {data.map((selectedRoom, idx) => <SelectedRoomItem key={selectedRoom.name + idx} selectedRoom={selectedRoom} /> )}
    </FormArticle>
  )
}

export default memo(SelectedRoom);