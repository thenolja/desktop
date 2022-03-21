import DatePicker from 'react-datepicker';
import { useCallback, SetStateAction } from 'react';

import { StyledDiv } from './InputDiv.style';

const StartDatePicker = ({ startDate, setStartDate }) => {
  const preventDefault = useCallback(e => e.preventDefault(), []);

  return (
    <StyledDiv width="174px">
      <img src="/src/assets/calander.png" alt="" />
      <DatePicker
        selected={startDate}
        dateFormat="yyyy-MM-dd"
        onChangeRaw={preventDefault}
        onChange={(date: SetStateAction<Date>) => setStartDate(date)}
      />
    </StyledDiv>
  );
};

export default StartDatePicker;
