import { useEffect, useState } from 'react';

import { getLocalHotelList } from 'src/utils/requests';
import { StyledH3, StyledUl, StyledLi } from './localGoods.style';
import MoveCarousel from 'components/Carousels/MoveCarousel';
import NoMoveCarousel from 'components/Carousels/NoMoveCarousel';

const LocalGoods = () => {
  const [local, setLocal] = useState<number>(758104);
  const [resHotels, setResHotels] = useState<[]>([]);
  const locals = [
    { localName: '경기', destiId: 758104 },
    { localName: '강원', destiId: 759017 },
    { localName: '경상', destiId: 1639042 },
    { localName: '제주', destiId: 1644457 },
  ];

  const changeLocal = async ({
    target: {
      dataset: { id },
    },
  }) => {
    setLocal(id);
  };

  useEffect(() => {
    const requestHotels = async () => {
      setResHotels(await getLocalHotelList(+local));
    };
    requestHotels();
  }, [local]);

  return (
    <div>
      <StyledH3>지역별 추천 상품</StyledH3>
      <StyledUl onClick={changeLocal}>
        {locals.map(({ localName, destiId }) => (
          <StyledLi data-id={destiId}>{localName}</StyledLi>
        ))}
      </StyledUl>
      {resHotels.length > 5 ? <MoveCarousel resHotels={resHotels} /> : <NoMoveCarousel resHotels={resHotels} />}
    </div>
  );
};

export default LocalGoods;
