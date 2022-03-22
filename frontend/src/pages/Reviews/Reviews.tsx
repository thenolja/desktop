import axios from "axios";
import Loader from "components/Review/Loader";
import { memo, useEffect, useRef, useState } from "react";
import { getReviews } from "src/utils/requests";
import Review from "../../components/Review/Review";
import ReviewTitle from "../../components/Review/ReviewTitle";
import {ReviewList} from '../Detail/TopReviews.style';

const Reviews = ():JSX.Element =>{
  const [hotelId, setHotelId]=useState<string>('229056');
  const [reviews, setReivews]=useState<object[]>([]);
  
  const PageURL = (page) => {
    return 
  }

  useEffect(() => {
    const getReviewList = async() => {
      const presentReivew=await getReviews(hotelId);

      setReivews(presentReivew.reviews.hermes.groups[presentReivew.reviews.hermes.groups.length-1].items);
      const currentPage=presentReivew.pagination.currentPage;
      const totalPages=presentReivew.pagination.totalPages;

      const urlLst=presentReivew.pagination.nextURL.split('/?');
      console.log(presentReivew.reviews.hermes.groups[presentReivew.reviews.hermes.groups.length-1].items, urlLst);
    }
    getReviewList();
  }, []);
  
  return(
    <>
      <ReviewTitle />

      <ReviewList>
        {reviews.map((review)=>{
          return (
              <Review key={review.itineraryId} review={review} />
            )
          }
        )}  
      </ReviewList>
    </>
  )
}

export default memo(Reviews);