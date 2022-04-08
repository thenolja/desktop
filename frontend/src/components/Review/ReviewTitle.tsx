import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { memo, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviewTitleData } from 'src/utils/requests';
import { getMockdataReviewsTitle } from 'src/utils/reviews';
import {Title, ReviewCount, Star, Average} from './ReviewTitle.style';

const ReviewTitle=()=>{
  const { id }=useParams();
  const [hotelId, setHotelId] = useState<string>(id);

  const [total, setTotal]=useState({
    len: 0,
    rate: ''
  })

  const {len, rate}=total;

  useEffect(()=>{
    const getReivewTitle = async () => {
      const title = await getReviewTitleData(hotelId);
      const [total, rating]= await getMockdataReviewsTitle(hotelId);

      setTotal({
        len: title.total + total,
        rate: ((title.rating*title.total/2 + rating)/(title.total+total)).toFixed(1)
      })
    }
    getReivewTitle();
  },[]);

  return (
    <Title>
      <article>
        <ReviewCount>후기<span>({len}개)</span></ReviewCount>
      </article>
      <article>
        <div>
          <Star><FontAwesomeIcon icon={faStar} /></Star>
          <Average>{rate}<span>/5</span></Average>
        </div>
        <div>
          최근 6개월 누적 평점
        </div>
      </article>
    </Title>
  )
}

export default memo(ReviewTitle);