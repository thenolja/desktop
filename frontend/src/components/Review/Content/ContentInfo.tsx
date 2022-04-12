import { Info, Star, Time } from "./Content.style";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReviewType } from "./Content.type"

export const ContentInfo = ({ review }: ReviewType) => {
  const StarScore = (star: number) => {
    const stars = [];
    for (let i = 0; i < star; i++) stars.push(<Star><FontAwesomeIcon icon={faStar} /></Star>);
    return stars;
  }

  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  const YEAR = review.writeTime ? +review.writeTime.split('-')[0] : 0;
  const MONTH = review.writeTime ? monthNames[+ review.writeTime.split('-')[1]] : '';
  const DATE = review.writeTime ? +review.writeTime.split('-')[2] : 0;
  const reviewDate = `${MONTH} ${DATE}, ${YEAR}`;

  return (
    <div>
      <div>
        {StarScore((review.rating ? (review.rating / 2) : review.star))}
        <Time>{(review.reviewDate ? review.reviewDate : reviewDate)}</Time>
      </div>
      <Info>
        <span>{review.reviewer ? (review.reviewer.name ? review.reviewer.name : '익명') : review.nickname}</span>
        <span>{review.tripTypeText ? review.tripTypeText : review.spec}</span>
      </Info>
    </div>
  )
}