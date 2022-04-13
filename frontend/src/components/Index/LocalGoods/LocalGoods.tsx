import React, { useState, useMemo, memo } from 'react';
import useSWR, { useSWRConfig } from 'swr';

import { getLocalHotelList } from 'src/utils/requests';
import { StyledH3, StyledDiv, StyledUl, StyledLi } from './localGoods.style';
import MoveCarousel from 'components/Carousels/MoveCarousel';
import NoMoveCarousel from 'components/Carousels/NoMoveCarousel';
import Spinner from 'components/Spinner/Spinner';

const LocalGoods = () => {
  const { mutate } = useSWRConfig();
  const [local, setLocal] = useState<number>(758104);
  const { data } = useSWR(`/api/local/${local}`, () => getLocalHotelList(local));

  const locals = useMemo(
    () => [
      { localName: '경기', destiId: 758104 },
      { localName: '강원', destiId: 759017 },
      { localName: '경상', destiId: 1639042 },
      { localName: '제주', destiId: 1644457 },
    ],
    [],
  );

  const changeLocal = (e: React.MouseEvent<HTMLUListElement>) => {
    const target = e.target as HTMLLIElement;
    const id = target.dataset.id;
    setLocal(+id);
    mutate('/api/local', () => getLocalHotelList(+id));
  };

  return (
    <StyledDiv>
      <StyledH3>지역별 추천 상품</StyledH3>
      <StyledUl onClick={changeLocal}>
        {locals.map(({ localName, destiId }) => (
          <StyledLi key={destiId} data-id={destiId}>
            {localName}
          </StyledLi>
        ))}
      </StyledUl>
      {!data ? <Spinner /> : data.length > 5 ? <MoveCarousel resHotels={data} /> : <NoMoveCarousel resHotels={data} />}
    </StyledDiv>
  );
};

export default memo(LocalGoods);
