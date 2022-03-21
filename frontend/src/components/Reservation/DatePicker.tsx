import DatePicker from 'react-datepicker';
import { SetStateAction, useCallback } from 'react';
import { addDays } from 'date-fns';
import 'react-datepicker/dist/react-datepicker.css';

import DatePickerContainer from './DataPicker.style';

const DatePickerComponent = ({ startDate, setStartDate, endDate, setEndDate }) => {
  const preventDefault = useCallback(e => e.preventDefault(), []);

  return (
    <DatePickerContainer>
      <DatePicker
        selectStart
        selected={startDate}
        dateFormat="yyyy-MM-dd"
        onChangeRaw={preventDefault}
        onChange={(date: SetStateAction<Date>) => setStartDate(date)}
      />
      <span>~</span>
      <DatePicker
        selectEnd
        selected={endDate}
        dateFormat="yyyy-MM-dd"
        minDate={addDays(startDate, 1)}
        onChangeRaw={preventDefault}
        onChange={(date: SetStateAction<Date>) => setEndDate(date)}
      />
    </DatePickerContainer>
  );
};

export default DatePickerComponent;
