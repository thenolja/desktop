import DatePicker from 'react-datepicker';
import { addDays } from 'date-fns';
import { DateType } from '../CheckInOut/Date.type';

import 'react-datepicker/dist/react-datepicker.css';
import DatePickerContainer from './DataPicker.style';

const DatePickerComponent = ({ startDate, setCheckInDate, endDate, setCheckOutDate }: DateType) => {
  return (
    <DatePickerContainer>
      <label className="srOnly" htmlFor="selectStart">
        시작일
      </label>
      <DatePicker
        id="selectStart"
        selectsStart
        selected={startDate}
        dateFormat="yyyy-MM-dd"
        onChangeRaw={e => e.preventDefault()}
        onChange={(date: Date) => setCheckInDate(date)}
      />

      <label className="srOnly" htmlFor="selectEnd">
        종료일
      </label>
      <DatePicker
        id="selectEnd"
        selectsEnd
        selected={endDate}
        dateFormat="yyyy-MM-dd"
        minDate={addDays(startDate, 1)}
        onChangeRaw={e => e.preventDefault()}
        onChange={(date: Date) => setCheckOutDate(date)}
      />
    </DatePickerContainer>
  );
};

export default DatePickerComponent;
