import { Link } from 'react-router-dom';
import { StyledLi } from './CarouselLi.style';

const CarouselLi = ({ hotel }) => {
  return (
    <StyledLi data-id={hotel.id}>
      <Link to={`/detail/${hotel.id}`}>
        <img src={hotel.optimizedThumbUrls.srpDesktop} alt="" />
        <h3>{hotel.name.split('(')[0]}</h3>
        <p>
          <span>
            <img src="/src/assets/star.png" alt="별 이미지" className="star-img" />
            {hotel.starRating || hotel.guestReviews.rating}
            /5
          </span>
          <span>후기 {hotel.guestReviews ? hotel.guestReviews.total : 0}개</span>
        </p>

        <p className="price-wrapper">
          <span>1박 기준</span>
          <br />
          {hotel.ratePlan
            ? Math.floor(hotel.ratePlan.price.exactCurrent * 1000).toLocaleString() + '원'
            : '가격 정보 없음'}
        </p>
      </Link>
    </StyledLi>
  );
};

export default CarouselLi;
