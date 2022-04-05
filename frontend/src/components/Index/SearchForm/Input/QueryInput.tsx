import React, { useRef, useState, forwardRef } from 'react';
import reactTriggerChange from 'react-trigger-change';

import location from '/src/assets/location.png';
import { getDestinationIdsByQuery } from 'src/utils/requests';
import { StyledDiv } from './InputDiv.style';
import { StyledUl } from './QueryInput.stype';
import QueryListType from './QueryList.type';

const QueryInput = ({ query, setQuery, setDestinationId }) => {
  const inputRef = useRef<HTMLInputElement>();
  const recommendsRef = useRef<HTMLUListElement>();
  const [showQueryList, setShowQueryList] = useState<boolean>(false);
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

      if (!res) {
        setQueryList([
          { caption: '찾으시는 결과가 없습니다', destinationId: 'none', name: '찾으시는 결과가 없습니다.' },
        ]);
        setDestinationId(null);
        setShowQueryList(true);
        return;
      }

      const reconstructRes = res.suggestions.reduce((acc: [], { entities }) => {
        return [...acc, ...entities];
      }, []);

      inputRef.current.value = reconstructRes[0].name;

      setDestinationId(reconstructRes[0].destinationId);
      setQueryList(reconstructRes);
      setShowQueryList(true);
      reconstructRes.length && setQuery(reconstructRes[0].name);
      setIsSearching(false);
    }, 200);
  };

  const handleInputClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLInputElement;

    if (target.value === '') return;

    setIsSearching(true);

    setTimeout(() => {
      reactTriggerChange(inputRef.current);
    }, 100);
  };

  const handleListClick = (e: React.MouseEvent) => {
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

  const ForwardRefUl = forwardRef<HTMLUListElement>((_, ref) => {
    const recommendItems = queryList.map(({ caption, destinationId, name }, index) => (
      <li
        key={destinationId}
        data-id={destinationId}
        data-name={name}
        dangerouslySetInnerHTML={{ __html: caption }}
        className={index === selected ? 'selected-li' : ''}
      />
    ));
    return (
      <StyledUl onClick={handleListClick} ref={ref}>
        {recommendItems}
      </StyledUl>
    );
  });

  document.addEventListener('click', e => {
    const target = e.target as HTMLInputElement;

    if (!recommendsRef.current?.contains(target)) {
      setShowQueryList(false);
    }
  });

  return (
    <StyledDiv flexGrow={3}>
      <img src={location} alt="" />
      <input
        type="text"
        placeholder="지역, 지하철역, 숙소명으로 찾아보세요."
        onClick={handleInputClick}
        onChange={handleChange}
        onKeyUp={handlekeyUp}
        onKeyDown={handleKeyDown}
        ref={inputRef}
        defaultValue={query}
      />
      {showQueryList && queryList.length > 0 && <ForwardRefUl ref={recommendsRef} />}
    </StyledDiv>
  );
};

export default QueryInput;
