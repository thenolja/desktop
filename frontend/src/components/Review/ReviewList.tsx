import { memo } from 'react';
import Review from './Review';
import { ReviewLi } from './Review.style';
import { ReviewsType } from './Review.type';

const ReviewList = ({ reviews, handleDelete }: ReviewsType ): JSX.Element => {
  return (
    <ReviewLi>
      {reviews.map((review, index) => (
        <div key={index}>
          <Review review={review} handleDelete={handleDelete} />
        </div>
      ))}
    </ReviewLi>
  );
};

export default memo(ReviewList);