import { useEffect, useState, useRef } from 'react';

import { getAllHotelList, getNearHotelList } from 'src/utils/requests';
import { StyledH3, StyledDivInner, StyledDiv } from './localGoods.style';
import CarouselItem from './CarouselItem/CarouselItem';
import Button from './Button/Button';

const LocalGoods = () => {
  const [slide, setSlide] = useState<number>(-1);
  const [agreeInfo, setAgreeInfo] = useState<boolean>(false);
  const [hotels, setHotels] = useState<object[]>([]);
  const [isMoving, setIsMoving] = useState<boolean>(false);
  const refDiv = useRef<HTMLDivElement>(null);

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
    if (isMoving) return;

    setIsMoving(true);

    refDiv.current.style.transition = 'transform 0.4s';
    refDiv.current.style.transform = `translateX(${slide * 100}%)`;

    setTimeout(() => {
      if (slide === 0) {
        refDiv.current.style.transition = 'none';
        refDiv.current.style.transform = 'translateX(-400%)';
        setSlide(-4);
      } else if (slide === -5) {
        refDiv.current.style.transition = 'none';
        refDiv.current.style.transform = 'translateX(-100%)';
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
        <StyledDivInner ref={refDiv}>
          {hotels.length !== 0 &&
            hotels.map((hotelArr, index) => <CarouselItem key={hotelArr.length * index} hotelArr={hotelArr} />)}
        </StyledDivInner>
        <Button role="next" onClick={moveNext} />
      </StyledDiv>
    </div>
  );
};

export default LocalGoods;
