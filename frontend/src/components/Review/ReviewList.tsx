import Review from "./Review"
import { ReviewLi } from './Review.style'
import { ReviewsType } from "./Review.type"

export const ReviewList=({reviews}:ReviewsType):JSX.Element=>{
  return(
    <ReviewLi>
      {reviews.map((review, index) => 
        <Review key={review.itineraryId+index} review={review} />
      )}
    </ReviewLi>
  )
}