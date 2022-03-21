import { StyledForm } from './SearchForm.style';
import PersoInput from './Input/PersoInput';
import QueryInput from './Input/QueryInput';
import Button from './Button/Button';
import React, { useState } from 'react';
import EndDatPicker from './Input/EndDatPicker';
import StartDatePicker from './Input/StartDatePicker';

const SearchForm = () => {
  const [query, setQuery] = useState<string>('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [person, setPerson] = useState(1);

  const changeDateFormat = (date: Date) => new Date(date).toISOString().split('T')[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log(query, changeDateFormat(startDate), changeDateFormat(endDate), person);
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <QueryInput setQuery={setQuery} />
      <StartDatePicker startDate={startDate} setStartDate={setStartDate} />
      <EndDatPicker startDate={startDate} endDate={endDate} setEndDate={setEndDate} />
      <PersoInput setPerson={setPerson} />
      <Button />
    </StyledForm>
  );
};

export default SearchForm;
