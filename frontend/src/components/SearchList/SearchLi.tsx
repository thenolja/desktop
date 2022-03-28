import { StyledLink } from './SearchLi.style';

const SearchLi = ({ hotel, queryData: { checkIn, checkOut, person } }) => {
  return (
    <li>
      <StyledLink to={`/detail/${hotel.id}?checkIn=${checkIn}&checkOut=${checkOut}&person=${person}`}>
        <img src={hotel.optimizedThumbUrls.srpDesktop} alt={hotel.name + '썸네일 이미지'} />
        <div className="hotel-inform">
          <h3>{hotel.name}</h3>
          <address>{`${hotel.address.streetAddress} ${hotel.address.region} ${hotel.address.postalCode}`}</address>
          <span className="neighbourhood">{hotel.neighbourhood}</span>
          <ul className="landMark-list">
            {hotel.landmarks.map(({ label, distance }) => (
              <li key={label}>
                {label}까지 {distance}
              </li>
            ))}
          </ul>
          <strong>{hotel.guestReviews.rating}</strong>
          <span className="general-review">{hotel.guestReviews.badgeText}</span>
          <p className="reviews">{hotel.guestReviews.total}개 Thenolja 고객 이용 후기</p>
        </div>
        <div>
          <p className="price">₩ {Math.floor(hotel.ratePlan.price.exactCurrent * 1000).toLocaleString()}</p>
          <p className="price-policy">세금 및 수수료 불 포함</p>
          <button>지금 예약</button>
          <p className="check-cancle">✓ 무료 취소</p>
        </div>
      </StyledLink>
    </li>
  );
};

export default SearchLi;
