import DatePicker from 'react-datepicker';
import { useCallback } from 'react';
import { addDays } from 'date-fns';
import { DateType } from './Date';

import 'react-datepicker/dist/react-datepicker.css';
import DatePickerContainer from './DataPicker.style';

const DatePickerComponent = ({ startDate, setStartDate, endDate, setEndDate }: DateType) => {
  const preventDefault = useCallback((e: React.ChangeEvent<HTMLInputElement>) => e.preventDefault(), []);

  return (
    <DatePickerContainer>
      <DatePicker
        selectsStart
        selected={startDate}
        dateFormat="yyyy-MM-dd"
        onChangeRaw={preventDefault}
        onChange={(date: Date) => setStartDate(date)}
      />
      <span>~</span>
      <DatePicker
        selectsEnd
        selected={endDate}
        dateFormat="yyyy-MM-dd"
        minDate={addDays(startDate, 1)}
        onChangeRaw={preventDefault}
        onChange={(date: Date) => setEndDate(date)}
      />
    </DatePickerContainer>
  );
};

export default DatePickerComponent;
