import React from 'react';
import { StyledDiv } from './InputDiv.style';

const QueryInput = ({ setQuery }) => {
  const handleChange = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    setQuery(target.value);
  };

  return (
    <StyledDiv flexGrow={3}>
      <img src="/src/assets/location.png" alt="" />
      <input id="query" placeholder="지역, 지하철역, 숙소명으로 찾아보세요." onChange={handleChange} />
    </StyledDiv>
  );
};

export default QueryInput;
