const HotelItem = ({ hotel }) => {
  return (
    <li data-id={hotel.id}>
      <img src={hotel.optimizedThumbUrls.srpDesktop} alt="" />
      <h3>{hotel.name}</h3>
      <span>{hotel.guestReviews.rating}/5</span>
      <span>후기 {hotel.guestReviews.total}개</span>
      <p>{+hotel.ratePlan.price.exactCurrent * 1000}원</p>
    </li>
  );
};

export default HotelItem;
