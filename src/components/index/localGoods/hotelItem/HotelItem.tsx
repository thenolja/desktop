const HotelItem = ({ hotel }) => {
  return (
    <li data-id={hotel.id}>
      <img src={hotel.optimizedThumbUrls.srpDesktop} alt="" />
      <h3>{hotel.name.split('(')[0]}</h3>
      <span>
        {hotel.guestReviews.rating}
        /5
      </span>
      <span>후기 {hotel.guestReviews.total}개</span>

      <p>
        <span>1박 기준</span>
        <br />
        {/* {+hotel.ratePlan.price.exactCurrent * 1000}원 */}
      </p>
    </li>
  );
};

export default HotelItem;
