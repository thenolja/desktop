import DatePicker from 'react-datepicker';
import { SetStateAction, useState } from 'react';
import { addDays } from 'date-fns';
import 'react-datepicker/dist/react-datepicker.css';
import styled from 'styled-components';

const DatePickerComponent = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <section className="DatePickerContainer">
      <h2 className="srOnly">날짜 선택</h2>
      <DatePicker
        selectStart
        selected={startDate}
        dateFormat="yyyy-MM-dd"
        onChange={(date: SetStateAction<Date>) => setStartDate(date)}
      />
      <span>~</span>
      <DatePicker
        selectEnd
        selected={endDate}
        dateFormat="yyyy-MM-dd"
        minDate={addDays(startDate, 1)}
        onChange={(date: SetStateAction<Date>) => setEndDate(date)}
      />
    </section>
  );
};

export default DatePickerComponent;
