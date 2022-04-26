import { ReviewType } from "components/Review/Content/Content.type";
import ReviewList from "components/Review/ReviewList";
import ReviewTitle from "components/Review/ReviewTitle";
import Spinner from "components/Spinner/Spinner";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getReviews } from "src/utils/requests";
import useSWR, { SWRConfig } from "swr";
import { ButtonWrapper, Button } from './TopReviews.style';

const Reviews = () => {
  const { id:hotelId }=useParams();

  const totalReview=`/reviews/${hotelId}`;
  
  const getReview=async()=>{
    const presentReview = await getReviews(hotelId);
    return presentReview.reviews.hermes.groups[presentReview.reviews.hermes.groups.length-1].items.splice(0,2);
  }

  function fetcher() {
    return new Promise(resolve => {
      resolve(getReview());
    });
  }

  const {data:reviews, error}=useSWR(hotelId,fetcher);

  return(
    <SWRConfig value={{ provider: cache => cache }}>
      <ReviewTitle />
      {reviews && <ReviewList reviews={reviews}/>}
      {(!reviews && !error) && <Spinner />}
      <ButtonWrapper>
        <Button>
          <Link to={totalReview}>더보기</Link>
        </Button>
      </ButtonWrapper>
    </SWRConfig>
  )
}

export default Reviews;