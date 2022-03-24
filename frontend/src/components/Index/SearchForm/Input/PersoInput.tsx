import React from 'react';
import { StyledDiv } from './InputDiv.style';

const PersoInput = ({ setPerson }) => {
  const handleChange = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    setPerson(target.value);
  };

  return (
    <StyledDiv width="267px" person={true}>
      <img src="/src/assets/person.png" alt="" />
      <input id="person" placeholder="1명" type="number" max={10} defaultValue={1} onChange={handleChange} />
    </StyledDiv>
  );
};

export default PersoInput;
