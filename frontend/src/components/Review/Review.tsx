import {FlexBox, Imoji, Time, Info, Text, Star, Button, MainWrapper} from './Review.style';
import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReviewProps } from './Review.type';
import { memo } from 'react';

const StarScore = (star:number) => {
  const stars = [];
  for(let i=0; i < star; i++) stars.push(<Star><FontAwesomeIcon icon={faStar} /></Star>);
  return stars;
}

const Review = (review: ReviewProps) => {
  const {id, star, writeTime, nickname, spec, reviewText} = review;

  return(
    <article>
      <FlexBox>
        <Imoji>imoji</Imoji>
        <div>
          <div>
            {StarScore(star)}
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

export default memo(Review);