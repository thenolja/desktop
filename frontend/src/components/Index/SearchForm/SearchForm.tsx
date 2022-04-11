import React, { useState, memo } from 'react';

import { StyledForm } from './SearchForm.style';
import PersoInput from './Input/PersoInput';
import QueryInput from './Input/QueryInput';
import EndDatPicker from './Input/EndDatPicker';
import StartDatePicker from './Input/StartDatePicker';
import Button from './Button/Button';
import { useNavigate } from 'react-router-dom';
import changeDateFormatToIsoSTring from 'src/utils/dateToISOString';

const SearchForm = ({
  propQuery = '',
  propDestinationId = null,
  propStartDate = new Date(),
  propEndDate = new Date(),
}) => {
  const navigate = useNavigate();
  const [query, setQuery] = useState<string>(propQuery);
  const [destinationId, setDestinationId] = useState<number | null>(propDestinationId);
  const [startDate, setStartDate] = useState<Date>(propStartDate);
  const [endDate, setEndDate] = useState<Date>(propEndDate);
  const [person, setPerson] = useState<number>(1);

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();

    const checkIn = changeDateFormatToIsoSTring(startDate);
    const checkOut = changeDateFormatToIsoSTring(endDate);

    if (!destinationId) {
      alert(destinationId === 0 ? '검색어를 입력해주세요' : '입력 값이 올바르지 않습니다.');
      return;
    }

    navigate(
      `/search/?query=${query}&destinationId=${destinationId}&checkIn=${checkIn}&checkOut=${checkOut}&person=${person}`,
    );
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <QueryInput query={query} setQuery={setQuery} setDestinationId={setDestinationId} />
      <StartDatePicker startDate={startDate} setStartDate={setStartDate} />
      <EndDatPicker startDate={startDate} endDate={endDate} setEndDate={setEndDate} />
      <PersoInput setPerson={setPerson} />
      <Button />
    </StyledForm>
  );
};

export default memo(SearchForm);
