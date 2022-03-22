import React from 'react';
import { StyledDiv } from './InputDiv.style';
import { StyledSelect } from './QueryInput.stype';

const QueryInput = ({ setDestinationId }) => {
  const handleChange = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    setDestinationId(+target.value);
  };

  const locals = [
    { name: '서울', destinationId: 759818 },
    { name: '제주도', destinationId: 1644457 },
    { name: '강릉 강원', destinationId: 759017 },
    { name: '부산', destinationId: 1639028 },
    { name: '속초 강원', destinationId: 1692232 },
    { name: '여수 전남', destinationId: 1693264 },
    { name: '인천', destinationId: 757364 },
    { name: '경주 경상북도', destinationId: 1639070 },
    { name: '해운대 부산', destinationId: 1706415 },
  ];

  return (
    <StyledDiv flexGrow={3}>
      <img src="/src/assets/location.png" alt="" />
      <StyledSelect onChange={handleChange}>
        {locals.map(({ name, destinationId }, index) => (
          <option key={destinationId} value={destinationId} defaultChecked={index === 0 ? true : false}>
            {name}
          </option>
        ))}
      </StyledSelect>
    </StyledDiv>
  );
};

export default QueryInput;
