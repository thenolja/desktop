import { useEffect, useState, useRef, useLayoutEffect } from 'react';

import { StyledDivInner, StyledDiv } from './Carousel.style';
import CarouselUl from './CarouselUl/CarouselUl';
import Button from './Button/Button';

const MoveCarousel = ({ resHotels }) => {
  const [slide, setSlide] = useState<number>(-1);
  const [limit, setLimit] = useState<number>(0);
  const [hotels, setHotels] = useState<object[][]>([]);
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

  useEffect(() => {
    refDiv.current.style.transition = 'none';
  }, []);

  useEffect(() => {
    const resConstructRes = makeArray(resHotels);
    setLimit(resConstructRes.length);

    setHotels([resConstructRes[resConstructRes.length - 1], ...resConstructRes, resConstructRes[0]]);
  }, [resHotels]);

  useLayoutEffect(() => {
    if (isMoving) return;

    setIsMoving(true);

    refDiv.current.style.transition = 'transform 0.6s';
    refDiv.current.style.transform = `translateX(${slide * 100}%)`;

    setTimeout(() => {
      if (slide === 0) {
        refDiv.current.style.transition = 'none';
        refDiv.current.style.transform = `translateX(${-limit * 100}%)`;
        setSlide(-limit);
      } else if (slide === -limit - 1) {
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
    <StyledDiv>
      <Button onClick={movePrev} aria-label="이전 호텔 목록 보기" />
      <StyledDivInner ref={refDiv}>
        {hotels.length !== 0 &&
          hotels.map((hotelArr, index) => <CarouselUl key={hotelArr.length * index} hotelArr={hotelArr} />)}
      </StyledDivInner>
      <Button onClick={moveNext} ria-label="다음 호텔 목록 보기" />
    </StyledDiv>
  );
};

export default MoveCarousel;
