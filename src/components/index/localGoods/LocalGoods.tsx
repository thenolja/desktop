import { useEffect, useState } from 'react';

import { getAllHotelList, getNearHotelList } from 'src/utils/requests';
import HotelItem from './hotelItem/HotelItem';
import { StyledH3, StyledUl, StyledDiv } from './localGoods.style';

const LocalGoods = () => {
  const [agreeInfo, setAgreeInfo] = useState<boolean>(false);
  const [hotels, setHotels] = useState<[]>([]);

  const success = async ({ coords }) => {
    setHotels(await getNearHotelList(coords));
    setAgreeInfo(true);
  };

  const error = async () => {
    setHotels(await getAllHotelList());
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success, error);
  }, []);

  return (
    <div>
      <StyledH3>{agreeInfo ? '현재 지역에서의 추천 상품' : '전체 지역의 추천 상품'}</StyledH3>
      <StyledDiv>
        <StyledUl>{hotels.length !== 0 && hotels.map(hotel => <HotelItem key={hotel.id} hotel={hotel} />)}</StyledUl>
      </StyledDiv>
    </div>
  );
};

export default LocalGoods;
