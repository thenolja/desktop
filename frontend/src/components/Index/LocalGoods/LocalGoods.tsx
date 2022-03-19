import { useEffect, useState, useMemo } from 'react';

import { getLocalHotelList } from 'src/utils/requests';
import { StyledH3, StyledUl, StyledLi } from './localGoods.style';
import MoveCarousel from 'components/Carousels/MoveCarousel';
import NoMoveCarousel from 'components/Carousels/NoMoveCarousel';

const LocalGoods = () => {
  const [local, setLocal] = useState<number>(758104);
  const [resHotels, setResHotels] = useState<object[]>([]);

  const locals = useMemo(
    () => [
      { localName: '경기', destiId: 758104, datas: [] },
      { localName: '강원', destiId: 759017, datas: [] },
      { localName: '경상', destiId: 1639042, datas: [] },
      { localName: '제주', destiId: 1644457, datas: [] },
    ],
    [],
  );

  const changeLocal = async ({
    target: {
      dataset: { id },
    },
  }) => {
    setLocal(id);
  };

  useEffect(() => {
    const nowLocal = locals.find(localData => localData.destiId === +local);

    const requestHotels = async () => {
      nowLocal.datas = await getLocalHotelList(+local);
      setResHotels(nowLocal.datas);
    };

    if (nowLocal.datas.length > 0) {
      setResHotels(nowLocal.datas);
    } else {
      requestHotels();
    }
  }, [local]);

  return (
    <div>
      <StyledH3>지역별 추천 상품</StyledH3>
      <StyledUl onClick={changeLocal}>
        {locals.map(({ localName, destiId }) => (
          <StyledLi key={destiId} data-id={destiId}>
            {localName}
          </StyledLi>
        ))}
      </StyledUl>
      {resHotels.length > 5 ? <MoveCarousel resHotels={resHotels} /> : <NoMoveCarousel resHotels={resHotels} />}
    </div>
  );
};

export default LocalGoods;
