import DatePicker from 'react-datepicker';
import { useCallback, SetStateAction } from 'react';
import { addDays } from 'date-fns';

import { StyledDiv } from './InputDiv.style';

const EndDatPicker = ({ startDate, endDate, setEndDate }) => {
  const preventDefault = useCallback(e => e.preventDefault(), []);

  return (
    <StyledDiv width="174px">
      <img src="/src/assets/calander.png" alt="" />
      <DatePicker
        selected={endDate}
        dateFormat="yyyy-MM-dd"
        minDate={addDays(startDate, 1)}
        onChangeRaw={preventDefault}
        onChange={(date: SetStateAction<Date>) => setEndDate(date)}
      />
    </StyledDiv>
  );
};

export default EndDatPicker;
