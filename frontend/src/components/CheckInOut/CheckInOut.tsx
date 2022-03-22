import { useState } from "react";
import Calendar from "./Calendar";
import {CheckInOutWrapper, Check, DatePick, SVG, Contour} from "./CheckInOut.style";

const KDay = ['일', '월', '화', '수', '목', '금', '토'];

const CheckInOut = ({checkIn, checkOut}) => {
  const [startDate, setStartDate] = useState<Date>(checkIn);
  const [endDate, setEndDate] = useState<Date>(checkOut);
  
  return(
    <CheckInOutWrapper>
      <div>
        <Check>
          체크인
          <DatePick>
            <Calendar
              startDate={startDate}
              setStartDate={setStartDate}
              endDate={endDate}
              minDate={new Date()}
            />
            {startDate.getMonth()+1}월 {startDate.getDate()}일({KDay[startDate.getDay()]})
            <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M7 10L12 15 17 10z"></path>
            </SVG>
          </DatePick>
        </Check>
        <Contour />
        <Check>
          체크아웃
          <DatePick>
            <Calendar
              startDate={endDate}
              setStartDate={setEndDate}
              endDate={startDate}
              minDate={startDate || new Date()}
            />
            {endDate.getMonth()+1}월 {endDate.getDate()}일({KDay[endDate.getDay()]})
            <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M7 10L12 15 17 10z"></path>
            </SVG>
          </DatePick>
        </Check>
      </div>
    </CheckInOutWrapper>
  )
};

export default CheckInOut;