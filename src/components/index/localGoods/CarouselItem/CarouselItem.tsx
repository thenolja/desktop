import HotelItem from '../HotelItem/HotelItem';

const CarouselItem = ({ hotelArr }) => {
  return (
    <ul>
      {hotelArr.map((hotel, idx) => (
        <HotelItem key={hotel.id + idx} hotel={hotel} />
      ))}
    </ul>
  );
};

export default CarouselItem;
