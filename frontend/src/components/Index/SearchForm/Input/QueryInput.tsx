import React, { useRef, useState } from 'react';
import { getDestinationIdsByQuery } from 'src/utils/requests';
import { StyledDiv } from './InputDiv.style';
import { StyledUl } from './QueryInput.stype';
import QueryListType from './QueryList.type';

const QueryInput = ({ query, setQuery, setDestinationId }) => {
  const inputRef = useRef<HTMLInputElement>();
  const [queryList, setQueryList] = useState<QueryListType[]>([]);
  let timer = null;

  const handleChange = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;

    timer && clearTimeout(timer);

    timer = setTimeout(async () => {
      const res = await getDestinationIdsByQuery(target.value);
      const resArr = res.suggestions.reduce((acc: [], { entities }) => {
        return [...acc, ...entities];
      }, []);

      setQueryList(resArr);
      setDestinationId(resArr[0].destinationId);
      setQuery(resArr[0].name);
      inputRef.current.value = resArr[0].name;
    }, 200);
  };

  const handleClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLInputElement;

    if (target.tagName !== 'LI') return;
    inputRef.current.value = target.dataset.name;
    setQuery(target.dataset.name);
    setDestinationId(target.dataset.id);
    setQueryList([]);
  };

  return (
    <StyledDiv flexGrow={3}>
      <img src="/src/assets/location.png" alt="" />
      <input
        type="text"
        placeholder="지역, 지하철역, 숙소명으로 찾아보세요."
        onChange={handleChange}
        ref={inputRef}
        defaultValue={query}
      />
      {queryList.length > 0 && (
        <StyledUl onClick={handleClick}>
          {queryList.map(({ caption, destinationId, name }) => (
            <li
              key={destinationId}
              data-id={destinationId}
              data-name={name}
              dangerouslySetInnerHTML={{ __html: caption }}
            />
          ))}
        </StyledUl>
      )}
    </StyledDiv>
  );
};

export default QueryInput;
