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

import { FeaturesWrapper, FeaturesTitle, FeaturesBox, FeaturesBoxTitle, FeatureList } from './AmenityFeatures.style';

const Amenity = ({ overviews }) => {
  const mockReviewList = [
    { id: '1', content: '편리함', count: 10 },
    { id: '2', content: '쇼핑', count: 11 },
    { id: '3', content: '안전함', count: 18 },
    { id: '4', content: '교통편 옵션', count: 27 },
    { id: '5', content: '다이닝 옵션', count: 32 },
    { id: '6', content: '걷기좋음', count: 22 },
  ];

  const overReiwMock = [
    {
      id: '0',
      title: ' 주요 편의 시설',
      type: 'HOTEL_FEATURE',
      content: [
        '462개의 금연 객실',
        '매일 하우스키핑',
        '5 개 레스토랑 및 바/라운지',
        '실내 수영장',
        '피트니스 센터',
        '주차 대행',
        '스파 서비스',
        '비즈니스 센터',
        '공항 셔틀',
        '24시간 운영 프런트 데스크',
        '프런트 데스크 금고',
        '스낵바/델리',
        '무료 WiFi 및 무료 주차',
      ],
    },
    {
      id: '1',
      title: '기타 편의 시설',
      type: 'HOTEL_FEATURE_ETC',
      content: ['객실 내 온도 조절기', '미니바', '에스프레소 메이커', '목욕가운', '슬리퍼', '다리미/다리미판'],
    },
    {
      id: '2',
      title: '주변 명소',
      type: 'LOCATION_SECTION',
      content: [
        '중구에 위치',
        '서울특별시청(걸어서 4분 거리)',
        '롯데백화점(걸어서 5분 거리)',
        '서울광장(걸어서 5분 거리)',
        '한국은행 화폐박물관(걸어서 3분 거리)',
        '눈 스퀘어(걸어서 3분 거리)',
        '한국 우표박물관(걸어서 4분거리)',
      ],
    },
  ];

  return (
    <>
      <AmenityWrapper>
        <CustomerReview>
          <CustomerReviewTitle>숙박 시설 위치에 대한 고객의 평가</CustomerReviewTitle>
          <CustomerReviewBody>
            {mockReviewList.map(({ id, content, count }) => (
              <>
                <CustomerReviewItem key={content}>
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
      <FeaturesWrapper>
        <FeaturesTitle>숙박 시설 특징</FeaturesTitle>
        <FeaturesBox>
          {overviews.map(({ id, title, type, content }) => (
            <ul>
              <FeaturesTitle key={type}>{title}</FeaturesTitle>
              {content.map(list => (
                <FeatureList>{list}</FeatureList>
              ))}
            </ul>
          ))}
        </FeaturesBox>
      </FeaturesWrapper>
    </>
  );
};

export default Amenity;
