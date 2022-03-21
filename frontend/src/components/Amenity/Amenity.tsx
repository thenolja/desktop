import Review from 'components/Review/Review';
import { faStar, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  AmenityWrapper,
  CustomerReview,
  CustomerReviewTitle,
  CustomerReviewBody,
  CustomerReviewItem,
  CustomerReviewCount,
  PushIcon,
} from './Amenity.style';
const Amenity = () => {
  const mockReviewList = [
    { id: '1', content: '편리함', count: 10 },
    { id: '2', content: '쇼핑', count: 11 },
    { id: '3', content: '안전함', count: 18 },
    { id: '4', content: '교통편 옵션', count: 27 },
    { id: '5', content: '다이닝 옵션', count: 32 },
    { id: '6', content: '걷기좋음', count: 22 },
  ];

  return (
    <AmenityWrapper>
      <CustomerReview>
        <CustomerReviewTitle>숙박 시설 위치에 대한 고객의 평가</CustomerReviewTitle>
        <CustomerReviewBody>
          {mockReviewList.map(({ id, content, count }) => (
            <>
              <CustomerReviewItem>
                <PushIcon>
                  <FontAwesomeIcon icon={faThumbsUp} size="lg" />
                </PushIcon>
                {content}
                <CustomerReviewCount>{count}건의 긍정적인 이용후기 </CustomerReviewCount>
              </CustomerReviewItem>
            </>
          ))}
        </CustomerReviewBody>
      </CustomerReview>
    </AmenityWrapper>
  );
};

export default Amenity;
