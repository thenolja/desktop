import Loader from "components/Review/Loader";
import Review from "components/Review/Review";
import ReviewTitle from "components/Review/ReviewTitle";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getReviews } from "src/utils/requests";
import {ReviewList, ButtonWrapper, Button} from './TopReviews.style';

const Reviews = () => {
  const { id }=useParams();

  const [hotelId, setHotelId]=useState<string>(id);
  const [reviews, setReviews]=useState<object[]>([]);
  const [isLoaded, setIsLoaded]=useState(false);

  const totalReview=`/reviews/${hotelId}`;
  
  useEffect(()=>{
    const getReview=async()=>{
      setIsLoaded(true);
      const presentReivew = await getReviews(hotelId);

      setReviews(presentReivew.reviews.hermes.groups[presentReivew.reviews.hermes.groups.length-1].items.splice(0,2));
      setIsLoaded(false);
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
      {isLoaded && <Loader />}
      <ButtonWrapper>
        <Button>
          <Link to={totalReview}>더보기</Link>
        </Button>
      </ButtonWrapper>
    </>
  )
}

export default Reviews;