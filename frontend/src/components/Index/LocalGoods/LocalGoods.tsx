import React, { useEffect, useState, useMemo } from 'react';

import { getLocalHotelList } from 'src/utils/requests';
import { StyledH3, StyledDiv, StyledUl, StyledLi } from './localGoods.style';
import MoveCarousel from 'components/Carousels/MoveCarousel';
import NoMoveCarousel from 'components/Carousels/NoMoveCarousel';
import Spinner from 'components/Spinner/Spinner';

const LocalGoods = () => {
  const [local, setLocal] = useState<number>(758104);
  const [resHotels, setResHotels] = useState<object[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const locals = useMemo(
    () => [
      { localName: '경기', destiId: 758104, datas: [] },
      { localName: '강원', destiId: 759017, datas: [] },
      { localName: '경상', destiId: 1639042, datas: [] },
      { localName: '제주', destiId: 1644457, datas: [] },
    ],
    [],
  );

  const changeLocal = async (e: React.MouseEvent<HTMLUListElement>) => {
    const target = e.target as HTMLLIElement;
    const id = target.dataset.id;
    setIsLoading(true);
    setLocal(+id);
  };

  useEffect(() => {
    const nowLocal = locals.find(localData => localData.destiId === +local);

    const requestHotels = async () => {
      nowLocal.datas = await getLocalHotelList(+local);
      setIsLoading(false);
      setResHotels(nowLocal.datas);
    };

    if (nowLocal.datas.length > 0) {
      setIsLoading(false);
      setResHotels(nowLocal.datas);
    } else {
      requestHotels();
    }
  }, [local]);

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
      {isLoading ? (
        <Spinner />
      ) : resHotels.length > 5 ? (
        <MoveCarousel resHotels={resHotels} />
      ) : (
        <NoMoveCarousel resHotels={resHotels} />
      )}
    </StyledDiv>
  );
};

export default LocalGoods;
