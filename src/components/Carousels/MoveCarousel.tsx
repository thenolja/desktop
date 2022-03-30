import { useEffect, useState, useRef } from 'react';

import { StyledDivInner, StyledDiv } from './Carousel.style';
import CarouselUl from './CarouselUl/CarouselUl';
import Button from './Button/Button';

const MoveCarousel = ({ resHotels }) => {
  const [slide, setSlide] = useState<number>(-1);
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
    const resConstructRes = makeArray(resHotels);
    setHotels([resConstructRes[resConstructRes.length - 1], ...resConstructRes, resConstructRes[0]]);
  }, []);

  useEffect(() => {
    if (isMoving) return;

    setIsMoving(true);

    refDiv.current.style.transition = 'transform 0.5s';
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
    <StyledDiv>
      <Button role="prev" onClick={movePrev} />
      <StyledDivInner ref={refDiv}>
        {hotels.length !== 0 &&
          hotels.map((hotelArr, index) => <CarouselUl key={hotelArr.length * index} hotelArr={hotelArr} />)}
      </StyledDivInner>
      <Button role="next" onClick={moveNext} />
    </StyledDiv>
  );
};

export default MoveCarousel;
