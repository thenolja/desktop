import CheckInOut from "components/CheckInOut/CheckInOut";
import Room from "components/Room/Room";
import {Buttons, SelectBtn} from "./Rooms.style";

const Rooms = ({...restProps}) => {
  const rooms = [
    //mock data
    {
      id: '1',
      name: '65m2 트윈 룸',
      standardPeople: 2,
      maxPeople: 3,
      originPrice: 734800,
      percent: 52,
      saledPrice: 9800
    },
    {
      id: '2',
      name: '65m2 트윈 룸 시티뷰',
      standardPeople: 2,
      maxPeople: 3,
      originPrice: 734800,
      percent: 52,
      saledPrice: 3400
    },
    {
      id: '3',
      name: '65m2 트윈 룸 오션뷰',
      standardPeople: 2,
      maxPeople: 3,
      originPrice: 734800,
      percent: 52,
      saledPrice: 3800
    }
  ];
  
  return(
    <div {...restProps}>
      <CheckInOut />
      <ul>
        {rooms.map(room => 
          <Room key={room.id} {...room} />
        )}
      </ul>
      <Buttons>
        <SelectBtn>예약하기</SelectBtn>
      </Buttons>
    </div>
  )
}

export default Rooms;