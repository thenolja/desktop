import CarouselUl from './CarouselUl/CarouselUl';
import { StyledDiv, StyledDivInner } from './Carousel.style';

const NoMoveCarousel = ({ resHotels }) => {
  return (
    <div>
      <StyledDiv>
        <StyledDivInner>
          {resHotels.length !== 0 &&
            resHotels.map((hotelArr, index) => <CarouselUl key={hotelArr.length * index} hotelArr={hotelArr} />)}
        </StyledDivInner>
      </StyledDiv>
    </div>
  );
};

export default NoMoveCarousel;
