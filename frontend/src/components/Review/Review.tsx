import {FlexBox, Imoji, Time, Info, Text, Star, Button, MainWrapper} from './Review.style';
import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReviewProps } from './Review.type';

const StarScore = (star:number) => {
  const $span = document.createElement('span');
  for(let i=0; i < Math.floor(star); i++){
    $span.innerHTML += `<Star><FontAwesomeIcon icon={faStar} /></Star>`;
  }
  if(star - Math.floor(star) > 0) $span.innerHTML += `<Star><FontAwesomeIcon icon={faStarHalf} /></Star>`;
  console.log($span, $span.childNodes)
  return $span.childNodes;
}

const Review = (review: ReviewProps) => {
  const {id, star, writeTime, nickname, spec, reviewText} = review;

  return(
    <article>
      <FlexBox>
        <Imoji>imoji</Imoji>
        <div>
          <div>
            {/* {StarScore(star)} */}
            {/* <StarScore star={star}/> */}
            <Star><FontAwesomeIcon icon={faStar} /></Star>
            <Star><FontAwesomeIcon icon={faStar} /></Star>
            <Star><FontAwesomeIcon icon={faStar} /></Star>
            <Star><FontAwesomeIcon icon={faStar} /></Star>
            <Star><FontAwesomeIcon icon={faStarHalf} /></Star>
            <Time>{writeTime}</Time>
          </div>
        <Info>
          <span>{nickname}</span>
          <span>{spec}</span>
        </Info>
        </div>
      </FlexBox>
      <MainWrapper>
        <Text>
          {reviewText}
        </Text>
        <Button>삭제</Button>
      </MainWrapper>
    </article>
  )
}

export default Review;