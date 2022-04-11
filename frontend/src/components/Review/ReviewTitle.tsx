import { memo, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviewTitleData } from 'src/utils/requests';
import { getMockdataReviewsTitle } from 'src/utils/reviews';
import { Title } from './Review.style';
import { AverageScore } from './Title/AverageScore';
import { NumberOfTitle } from './Title/NumberOfTitle';

const ReviewTitle = () => {
  const { id } = useParams();
  const [hotelId] = useState<string>(id);

  const [total, setTotal] = useState<{ len: number, rate: string }>({
    len: 0,
    rate: ''
  })

  const { len, rate } = total;

  useEffect(() => {
    const getReivewTitle = async () => {
      const title = await getReviewTitleData(hotelId);
      const [mockTotal, mockRating] = await getMockdataReviewsTitle(hotelId);

      setTotal({
        len: title.total + mockTotal,
        rate: ((title.rating * title.total / 2 + mockRating) / (title.total + mockTotal)).toFixed(1)
      })
    }
    getReivewTitle();
  }, []);

  return (
    <Title>
      <NumberOfTitle len={len} />
      <AverageScore rate={rate} />
    </Title>
  )
}

export default memo(ReviewTitle);