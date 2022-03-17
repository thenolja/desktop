import { useEffect, useState, useMemo } from 'react';
import { getAllHotelList, getNearHotelList } from 'src/utils/requests';
import HotelItem from './hotelItem/HotelItem';
import locationType from './location.type';

const LocalGoods = () => {
  const [agreeInfo, setAgreeInfo] = useState<boolean>(false);
  const [hotels, setHotels] = useState<[]>([]);

  const success = async ({ coords }) => {
    setHotels(await getNearHotelList(coords));
    setAgreeInfo(true);
  };

  const error = () => {
    setHotels(getAllHotelList());
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success, error);
  }, []);

  return (
    <div>
      <h2>{agreeInfo ? '현재 지역에서의 추천 상품' : '전체 지역의 추천 상품'}</h2>
      <ul>{hotels.length !== 0 && hotels.map(hotel => <HotelItem key={hotel.id} hotel={hotel} />)}</ul>
    </div>
  );
};

export default LocalGoods;
