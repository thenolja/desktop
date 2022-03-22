import React from 'react';
import { StyledDiv } from './InputDiv.style';

const PersoInput = ({ setPerson }) => {
  const handleChange = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    setPerson(target.value);
  };

  return (
    <StyledDiv width="267px">
      <img src="/src/assets/person.png" alt="" />
      <input id="person" placeholder="인원 수" type="number" max={10} onChange={handleChange} />
    </StyledDiv>
  );
};

export default PersoInput;
