import HotelItem from '../HotelItem/HotelItem';

const CarouselItem = ({ hotelArr }) => {
  console.log(hotelArr);

  return (
    <ul>
      {hotelArr.map(hotel => (
        <HotelItem key={hotel.id + idx} hotel={hotel} />
      ))}
    </ul>
  );
};

export default CarouselItem;
