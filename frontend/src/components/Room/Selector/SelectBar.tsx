import { Buttons, SelectBtn, SelectCartBtn, Selected } from "./Selector.style"
import { Link } from 'react-router-dom';
import { memo } from "react";
import { SelectorType } from "./Seletor.type";

const SelectBar = ({ selectedRoom, hotelId, setSessionStorage }: SelectorType) => {
  return (
    <Buttons>
      {selectedRoom && selectedRoom.name ?
        <>
          <Selected>
            현재 선택된 객실 : <span>{selectedRoom.name}</span>
          </Selected>
          <div>
            <Link to={'/cart'}>
              <SelectCartBtn onClick={setSessionStorage}>장바구니 담기</SelectCartBtn>
            </Link>
            <Link to={`/reservation/${hotelId}`}>
              <SelectBtn onClick={setSessionStorage}>예약하기</SelectBtn>
            </Link>
          </div>
        </>
        :
        <div>
          <SelectCartBtn disabled>장바구니 담기</SelectCartBtn>
          <SelectBtn disabled>예약하기</SelectBtn>
        </div>
      }
    </Buttons>
  )
}

export default memo(SelectBar);