import { StyledForm } from './SearchForm.style';
import PersoInput from './Input/PersoInput';
import QueryInput from './Input/QueryInput';
import Button from './Button/Button';
import { useState } from 'react';
import EndDatPicker from './Input/EndDatPicker';
import StartDatePicker from './Input/StartDatePicker';

const SearchForm = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <StyledForm>
      <QueryInput />
      <StartDatePicker startDate={startDate} setStartDate={setStartDate} />
      <EndDatPicker startDate={startDate} endDate={endDate} setEndDate={setEndDate} />
      <PersoInput />
      <Button />
    </StyledForm>
  );
};

export default SearchForm;
