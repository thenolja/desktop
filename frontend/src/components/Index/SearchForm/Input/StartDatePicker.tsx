import DatePicker from 'react-datepicker';
import { useCallback } from 'react';

import { StyledDiv } from './InputDiv.style';

const StartDatePicker = ({ startDate, setStartDate }) => {
  const preventDefault = useCallback(e => e.preventDefault(), []);

  return (
    <StyledDiv width="174px">
      <img src="/src/assets/calander.png" alt="" />
      <DatePicker
        selectsStart
        selected={startDate}
        minDate={startDate}
        dateFormat="yyyy-MM-dd"
        onChangeRaw={preventDefault}
        onChange={date => setStartDate(date)}
      />
    </StyledDiv>
  );
};

export default StartDatePicker;
