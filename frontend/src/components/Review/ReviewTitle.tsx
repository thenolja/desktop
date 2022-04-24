import { memo, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useSWR, { SWRConfig } from 'swr';

import { getReviewTitleData } from 'src/utils/requests';
import { getMockdataReviewsTitle } from 'src/utils/reviews';
import { Title } from './Review.style';
import AverageScore from './Title/AverageScore';
import NumberOfTitle from './Title/NumberOfTitle';

const ReviewTitle = () => {
  const { id:hotelId } = useParams();

  const getReivewTitle = async () => {
    const title = await getReviewTitleData(hotelId);
    const [mockTotal, mockRating] = await getMockdataReviewsTitle(hotelId);

    const len = title.total + mockTotal;
    const rate = ((title.rating * title.total / 2 + mockRating) / (title.total + mockTotal)).toFixed(1)
    return [len, rate];
  }
  
  function fetcher() {
    return new Promise(resolve => {
      resolve(getReivewTitle());
    });
  }
  const {data:total, error}=useSWR('api/topReview/title',fetcher);

  return (
    <SWRConfig value={{ provider: cache => cache }}>
      <Title>
        {total && <NumberOfTitle len={total[0]} />}
        {total && <AverageScore rate={total[1]} />}
      </Title>
    </SWRConfig>
  )
}

export default memo(ReviewTitle);