import CarouselLi from '../CarouselLi/CarouselLi';

const CarouselUl = ({ hotelArr }) => {
  return (
    <ul>
      {hotelArr.map(hotel => (
        <CarouselLi key={hotel.id} hotel={hotel} />
      ))}
    </ul>
  );
};

export default CarouselUl;
