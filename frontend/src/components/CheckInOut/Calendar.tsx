import { memo } from 'react';
import DatePicker from 'react-datepicker';
import { DatePickerWrapper } from './CheckInOut.style';
import { DateType } from './Date.type';

const Calendar = ({ startDate, setDate, endDate, minDate }: DateType) => {
  return (
    <DatePickerWrapper>
      <label className="srOnly" htmlFor="calendar">
        체크인 체크아웃
      </label>
      <DatePicker
        id="calendar"
        selected={startDate}
        onChange={date => setDate(date)}
        selectsStart
        minDate={minDate}
        startDate={startDate}
        endDate={endDate}
      />
    </DatePickerWrapper>
  );
};
export default memo(Calendar);
