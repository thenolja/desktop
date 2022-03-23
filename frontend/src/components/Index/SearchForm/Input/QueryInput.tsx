import React, { useRef, useState } from 'react';
import { getDestinationIdsByQuery } from 'src/utils/requests';
import { StyledDiv } from './InputDiv.style';
import { StyledUl } from './QueryInput.stype';
import QueryListType from './QueryList.type';

const QueryInput = ({ query, setQuery, setDestinationId }) => {
  const inputRef = useRef<HTMLInputElement>();
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [queryList, setQueryList] = useState<QueryListType[]>([]);
  const [selected, setSelected] = useState<number>(0);

  let timer = null;

  const handleChange = (e: React.ChangeEvent) => {
    if (!isSearching) return;

    const target = e.target as HTMLInputElement;

    timer && clearTimeout(timer);

    timer = setTimeout(async () => {
      const res = await getDestinationIdsByQuery(target.value);
      const reconstructRes = res.suggestions.reduce((acc: [], { entities }) => {
        return [...acc, ...entities];
      }, []);
      console.log(reconstructRes);

      inputRef.current.value = reconstructRes[0].name;

      setDestinationId(reconstructRes[0].destinationId);
      setQueryList(reconstructRes);
      reconstructRes.length && setQuery(reconstructRes[0].name);
      setIsSearching(false);
    }, 500);
  };

  const handleClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLInputElement;

    if (target.tagName !== 'LI') return;

    inputRef.current.value = target.dataset.name;
    setQuery(target.dataset.name);
    setDestinationId(target.dataset.id);
    setQueryList([]);
  };

  const settingStates = (selectState: number, clear?: boolean) => {
    inputRef.current.value = queryList[selectState].name;
    setQuery(queryList[selectState].name);
    setDestinationId(queryList[selectState].destinationId);

    clear ? setQueryList([]) : setSelected(selectState);
  };

  const handlekeyUp = (e: React.KeyboardEvent) => {
    let tempSelected = 0;

    if (e.key === 'ArrowUp') {
      tempSelected = selected > 0 ? selected - 1 : queryList.length - 1;
      settingStates(tempSelected);
    } else if (e.key === 'ArrowDown') {
      tempSelected = selected + 1 > queryList.length - 1 ? 0 : selected + 1;
      settingStates(tempSelected);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      settingStates(selected, true);
    } else {
      setIsSearching(true);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
    }
  };

  return (
    <StyledDiv flexGrow={3}>
      <img src="/src/assets/location.png" alt="" />
      <input
        type="text"
        placeholder="지역, 지하철역, 숙소명으로 찾아보세요."
        onChange={handleChange}
        onKeyUp={handlekeyUp}
        onKeyDown={handleKeyDown}
        ref={inputRef}
        defaultValue={query}
      />
      {queryList.length > 0 && (
        <StyledUl onClick={handleClick}>
          {queryList.map(({ caption, destinationId, name }, index) => (
            <li
              key={destinationId}
              data-id={destinationId}
              data-name={name}
              dangerouslySetInnerHTML={{ __html: caption }}
              className={index === selected ? 'selected-li' : ''}
            />
          ))}
        </StyledUl>
      )}
    </StyledDiv>
  );
};

export default QueryInput;
