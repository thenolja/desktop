import DatePicker from 'react-datepicker';
import { useCallback, useEffect } from 'react';
import { addDays } from 'date-fns';

import { StyledDiv } from './InputDiv.style';

const EndDatPicker = ({ startDate, endDate, setEndDate }) => {
  const preventDefault = useCallback(e => e.preventDefault(), []);
  const getTimeofDate = (date: Date) => new Date(date).getTime();

  useEffect(() => {
    const startTime = getTimeofDate(startDate);
    const endTime = getTimeofDate(endDate);

    if (endTime - startTime < 1) setEndDate(startDate);
  }, [startDate]);

  return (
    <StyledDiv width="174px">
      <img src="/src/assets/calander.png" alt="" />
      <DatePicker
        selectsEnd
        selected={endDate}
        dateFormat="yyyy-MM-dd"
        minDate={addDays(startDate, 1)}
        onChangeRaw={preventDefault}
        onChange={date => setEndDate(date)}
      />
    </StyledDiv>
  );
};

export default EndDatPicker;
