import React from 'react';

import person from '/src/assets/person.png';
import { StyledDiv } from './InputDiv.style';

const PersoInput = ({ setPerson }) => {
  const handleChange = (e: React.ChangeEvent): void => {
    const target = e.target as HTMLInputElement;
    setPerson(target.value);
  };

  return (
    <StyledDiv width="267px" person={true}>
      <img src={person} alt="사람 아이콘" />
      <input id="person" placeholder="1명" type="number" max={10} defaultValue={1} onChange={handleChange} />
    </StyledDiv>
  );
};

export default PersoInput;
