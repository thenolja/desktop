import { useEffect, useState } from 'react';

import { getLocalHotelList } from 'src/utils/requests';
import { StyledH3 } from './localGoods.style';
import MoveCarousel from 'components/Carousels/MoveCarousel';
import NoMoveCarousel from 'components/Carousels/NoMoveCarousel';

const LocalGoods = () => {
  const [resHotels, setResHotels] = useState<[]>([]);
  const [curlocal, setCurLocal] = useState<number>(758104);
  const locals = [
    { localName: '경기', destiId: 758104 },
    { localName: '강원', destiId: 759017 },
    { localName: '경상', destiId: 1639042 },
    { localName: '제주', destiId: 1644457 },
  ];

  return (
    <div>
      <StyledH3>지역별 추천 상품</StyledH3>
      <ul>
        {locals.map(({ localName, destiId }) => (
          <li data-id={destiId}>{localName}</li>
        ))}
      </ul>

      {resHotels.length > 5 ? <MoveCarousel resHotels={resHotels} /> : <NoMoveCarousel resHotels={resHotels} />}
    </div>
  );
};

export default LocalGoods;
