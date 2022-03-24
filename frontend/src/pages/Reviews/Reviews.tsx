import axios from "axios";
import { throttle } from 'lodash';
import Loader from "components/Review/Loader";
import { memo, useEffect, useRef, useState } from "react";
import { getReviews } from "src/utils/requests";
import Review from "../../components/Review/Review";
import ReviewTitle from "../../components/Review/ReviewTitle";
import {ReviewList, TopButton} from '../Detail/TopReviews.style';
import { useParams } from "react-router-dom";

const Reviews = ():JSX.Element =>{
  const {id}=useParams();
  const [hotelId, setHotelId]=useState<string>(id);
  
  const [target, setTarget]=useState(null);
  const [isLoaded, setIsLoaded]=useState(false);
  const [reviews, setReivews]=useState<object[]>([]);
  
  let nextUrl = '';
  let currentPage = 1;
  let totalPage;

  const getMoreItem = async () => {
    setIsLoaded(true);
    const presentReivew = await getReviews(hotelId, nextUrl);

    currentPage = presentReivew.pagination.currentPage;
    totalPage = presentReivew.pagination.totalPages;
    nextUrl = presentReivew.pagination.nextURL;
    setReivews(currentReviews=>[...currentReviews, ...presentReivew.reviews.hermes.groups[presentReivew.reviews.hermes.groups.length-1].items]);
    setIsLoaded(false);
  };

  const onIntersect = async ([entry], observer) => {
    if (entry.isIntersecting && !isLoaded && currentPage!==totalPage) {
      observer.unobserve(entry.target);
      await getMoreItem();
      observer.observe(entry.target);
    } else return;
  };

  useEffect(() => {
    let observer;
    if (target) {
      observer = new IntersectionObserver(onIntersect, {
        threshold: 0.5,
      });
      observer.observe(target);
    }
    return () => observer && observer.disconnect();
  }, [target]);  

  const [offset, setOffset]=useState<number>(0);

  useEffect(()=>{
    const $scrollIcon = document.querySelector('#top');
    const TOP_POSITION_SHOW_BUTTON = 500;
    $scrollIcon.style.display = window.pageYOffset > TOP_POSITION_SHOW_BUTTON ? 'block' : 'none';

    window.onscroll = throttle(() => {
      $scrollIcon.style.display = window.pageYOffset > TOP_POSITION_SHOW_BUTTON ? 'block' : 'none';
    }, 300);

    $scrollIcon.onclick = () => window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [window]);

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
      <TopButton id="top">TOP</TopButton>
      <div ref={setTarget}>
        {isLoaded && <Loader />}
      </div>
    </>
  )
}

export default memo(Reviews);