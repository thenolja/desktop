import { useEffect, useState, useRef } from 'react';

import { getAllHotelList, getNearHotelList } from 'src/utils/requests';
import Button from './Button/Button';
import CarouselItem from './CarouselItem/CarouselItem';
import HotelItem from './HotelItem/HotelItem';
import { StyledH3, StyledUl, StyledDiv } from './localGoods.style';

const LocalGoods = () => {
  const [slide, setSlide] = useState<number>(-1);
  const [agreeInfo, setAgreeInfo] = useState<boolean>(false);
  const [hotels, setHotels] = useState<[]>([]);
  const [isMoving, setIsMoving] = useState<boolean>(false);
  const refUl = useRef();

  const listNum = 5;

  const makeArray = arr => {
    let index = 0;

    return arr.reduce((acc, cur) => {
      if (acc[index] === undefined) {
        acc[index] = [];
      }
      if (acc[index].length === listNum) {
        acc[++index] = [];
      }
      acc[index].push(cur);
      return acc;
    }, []);
  };

  const success = async ({ coords }) => {
    const res = await getNearHotelList(coords);
    const resConstructRes = makeArray(res);
    console.log([resConstructRes[resConstructRes.length - 1], ...resConstructRes, resConstructRes[0]]);

    setHotels([resConstructRes[resConstructRes.length - 1], ...resConstructRes, resConstructRes[0]]);

    setAgreeInfo(true);
  };

  const error = async () => {
    const res = await getAllHotelList();
    setHotels([...res.slice(res.length - 5, res.length), ...res, ...res.slice(0, 5)]);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success, error);
  }, []);

  useEffect(() => {
    setIsMoving(true);

    refUl.current.style.transition = 'transform 0.5s';
    refUl.current.style.transform = `translateX(${slide * 100}%)`;

    setTimeout(() => {
      if (slide === 0) {
        refUl.current.style.transition = 'none';
        refUl.current.style.transform = 'translateX(-400%)';
        setSlide(-4);
      } else if (slide === -5) {
        refUl.current.style.transition = 'none';
        refUl.current.style.transform = 'translateX(-100%)';
        setSlide(-1);
      }
      setIsMoving(false);
    }, 500);
  }, [slide]);

  const movePrev = () => {
    if (isMoving) return;
    setSlide(slide + 1);
  };

  const moveNext = () => {
    if (isMoving) return;
    setSlide(slide - 1);
  };

  return (
    <div>
      <StyledH3>{agreeInfo ? '현재 지역에서의 추천 상품' : '전체 지역의 추천 상품'}</StyledH3>
      <StyledDiv>
        <Button role="prev" onClick={movePrev} />
        {/* <StyledUl slide={slide} ref={refUl}>
          {hotels.length !== 0 && hotels.map((hotel, idx) => <HotelItem key={hotel.id + idx} hotel={hotel} />)}
        </StyledUl> */}
        <StyledUl ref={refUl}>
          {hotels.length !== 0 && hotels.map(hotelArr => {
           return hotelArr.map(hotel => )
          })}
        </StyledUl>
        <Button role="next" onClick={moveNext} />
      </StyledDiv>
    </div>
  );
};

export default LocalGoods;
