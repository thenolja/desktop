import DatePicker from 'react-datepicker';
import styled from 'styled-components';
import { DateType } from './Date.type';

const DatePickerWrapper=styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;

  input{
    color: transparent;
    display: block;
    width: 100%;
    height: 60px;
    cursor: pointer;
  }
`;

const Calendar=({ startDate, setStartDate, endDate, minDate }: DateType)=>{
  
  return(
    <DatePickerWrapper>
      <label className="srOnly" htmlFor="calendar">
        체크인 체크아웃
      </label>
      <DatePicker
        id="calendar"
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        selectsStart
        minDate={minDate}
        startDate={startDate}
        endDate={endDate}
      />
    </DatePickerWrapper>
  )
}
export default Calendar;