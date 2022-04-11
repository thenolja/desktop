import { ReviewType } from "components/Review/Content/Content.type";
import { ReviewList } from "components/Review/ReviewList";
import ReviewTitle from "components/Review/ReviewTitle";
import Spinner from "components/Spinner/Spinner";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getReviews } from "src/utils/requests";
import { ButtonWrapper, Button } from './TopReviews.style';

const Reviews = () => {
  const { id }=useParams();

  const [hotelId]=useState<string>(id);
  const [reviews, setReviews]=useState<ReviewType[]>([]);
  const [isLoaded, setIsLoaded]=useState<boolean>(false);

  const totalReview=`/reviews/${hotelId}`;
  
  useEffect(()=>{
    const getReview=async()=>{
      setIsLoaded(true);
      const presentReview = await getReviews(hotelId);

      setReviews(presentReview.reviews.hermes.groups[presentReview.reviews.hermes.groups.length-1].items.splice(0,2));
      setIsLoaded(false);
    }
    getReview();
  },[]);

  return(
    <>
      <ReviewTitle />
      <ReviewList reviews={reviews}/>
      {isLoaded && <Spinner />}
      <ButtonWrapper>
        <Button>
          <Link to={totalReview}>더보기</Link>
        </Button>
      </ButtonWrapper>
    </>
  )
}

export default Reviews;