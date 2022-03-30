import { useEffect, useState, memo } from 'react';

import { getAllHotelList, getNearHotelList } from 'src/utils/requests';
import { StyledH3, StyledDiv } from './CurrentGoods.style';
import MoveCarousel from 'components/Carousels/MoveCarousel';
import NoMoveCarousel from 'components/Carousels/NoMoveCarousel';
import Spinner from 'components/Spinner/Spinner';

const CurrentGoods = () => {
  const [agreeInfo, setAgreeInfo] = useState<boolean>(false);
  const [resHotels, setResHotels] = useState<[]>([]);

  const success = async ({ coords }) => {
    const res = await getNearHotelList(coords);
    setResHotels(res);
    setAgreeInfo(true);
  };

  const error = async () => {
    setResHotels(await getAllHotelList());
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success, error);
  }, []);

  return (
    <StyledDiv>
      <StyledH3>{agreeInfo ? '현재 지역에서의 추천 상품' : '전체 지역의 추천 상품'}</StyledH3>
      {resHotels?.length === 0 && <Spinner />}
      {resHotels?.length > 5 ? <MoveCarousel resHotels={resHotels} /> : <NoMoveCarousel resHotels={resHotels} />}
    </StyledDiv>
  );
};

export default memo(CurrentGoods);
