import { useEffect, useState } from 'react';

import { getAllHotelList, getNearHotelList } from 'src/utils/requests';
import { StyledH3 } from './CurrentGoods.style';
import MoveCarousel from 'components/Carousels/MoveCarousel';
import NoMoveCarousel from 'components/Carousels/NoMoveCarousel';

const CurrentGoods = () => {
  const [agreeInfo, setAgreeInfo] = useState<boolean>(false);
  const [resHotels, setResHotels] = useState<[]>([]);

  const success = async ({ coords }) => {
    setResHotels(await getNearHotelList(coords));
    setAgreeInfo(true);
  };

  const error = async () => {
    setResHotels(await getAllHotelList());
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success, error);
  }, []);

  return (
    <div>
      <StyledH3>{agreeInfo ? '현재 지역에서의 추천 상품' : '전체 지역의 추천 상품'}</StyledH3>
      {resHotels.length > 5 ? <MoveCarousel resHotels={resHotels} /> : <NoMoveCarousel resHotels={resHotels} />}
    </div>
  );
};

export default CurrentGoods;
