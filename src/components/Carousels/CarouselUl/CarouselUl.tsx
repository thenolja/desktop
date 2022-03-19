import CarouselLi from '../CarouselLi/CarouselLi';

const CarouselUl = ({ hotelArr }) => {
  return (
    <ul>
      {hotelArr.map((hotel, idx) => (
        <CarouselLi key={hotel.id + idx} hotel={hotel} />
      ))}
    </ul>
  );
};

export default CarouselUl;
