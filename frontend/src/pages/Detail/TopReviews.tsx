import Review from "components/Review/Review";
import ReviewTitle from "components/Review/ReviewTitle";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getReviews } from "src/utils/requests";
import {ReviewList, ButtonWrapper, Button} from './TopReviews.style';

const Reviews = () => {
  const [hotelId, setHotelId]=useState<string>('229056');
  const [reviews, setReviews]=useState<object[]>([]);
  
  useEffect(()=>{
    const getReview=async()=>{
      const presentReivew = await getReviews(hotelId);

      setReviews(presentReivew.reviews.hermes.groups[presentReivew.reviews.hermes.groups.length-1].items.splice(0,2));
    }
    getReview();
  },[]);

  return(
    <>
    <ReviewTitle />

      <ReviewList>
        {reviews.map(review => 
          <Review key={review.itineraryId} review={review} />
        )}
      </ReviewList>

      <ButtonWrapper>
        <Button>
          <Link to="/reviews">더보기</Link>
        </Button>
      </ButtonWrapper>
    </>
  )
}

export default Reviews;