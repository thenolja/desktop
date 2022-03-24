import { useState, useEffect } from 'react';
import Review from 'components/Review/Review';
import { faStar, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getHotelInfo } from 'src/utils/requests';

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
const settingHotelOverview = (body: object[]) => {
  interface Overview {
    title?: string;
    type?: string;
    content: string[];
  }
  let sectionSetting: Overview = {
    title: body.amenities[0].heading,
    type: body.amenities[0].listItems[0].heading,
    content: body.amenities[0].listItems[0].listItems,
  };

  const hotelOverview: object[] = [
    body.overview.overviewSections[0],
    sectionSetting,
    body.overview.overviewSections[1],
  ];

  return hotelOverview;
};
const Amenity = () => {
  const [overviews, setOverviews] = useState<object[]>([]);
  useEffect(() => {
    const requestbody = async () => {
      const resoponseInfo = await getHotelInfo(hotelId);
      setOverviews(settingHotelOverview(resoponseInfo));
    };
    requestbody();
  }, []);
  const mockReviewList = [
    { id: '1', content: '편리함', count: 10 },
    { id: '2', content: '쇼핑', count: 11 },
    { id: '3', content: '안전함', count: 18 },
    { id: '4', content: '교통편 옵션', count: 27 },
    { id: '5', content: '다이닝 옵션', count: 32 },
    { id: '6', content: '걷기좋음', count: 22 },
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
