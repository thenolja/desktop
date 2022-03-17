import { useEffect, useState } from 'react';
import { getAllHotelList, getNearHotelList } from 'src/utils/requests';
import locationType from './location.type';

const LocalGoods = () => {
  const [agreeInfo, setAgreeInfo] = useState<boolean>(false);
  const [location, setLocation] = useState<locationType>({ latitude: 0, longitude: 0 });
  const [hotels, setHotels] = useState([]);

  const success = ({ coords: { latitude, longitude } }) => {
    setLocation({ latitude, longitude });
    setAgreeInfo(true);
  };

  const error = () => {
    setAgreeInfo(false);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success, error);
  }, []);

  useEffect(() => {
    const res = agreeInfo ? getNearHotelList(location) : getAllHotelList();
    setHotels(getNearHotelList(location));
    console.log(hotels);
  }, [agreeInfo]);

  return <div>현재 지역에서의 추천 상품</div>;
};

export default LocalGoods;
