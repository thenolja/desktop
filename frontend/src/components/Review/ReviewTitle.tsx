import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { memo, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviewTitleData } from 'src/utils/requests';
import {Title, ReviewCount, Star, Average} from './ReviewTitle.style';

const ReviewTitle=()=>{
  const { id }=useParams();
  const [hotelId, setHotelId] = useState<string>(id);

  const [total, setTotal]=useState({
    len: 0,
    rate: 0
  })

  const {len, rate}=total;

  useEffect(()=>{
    const getReivewTitle = async () => {
      const title = await getReviewTitleData(hotelId);

      setTotal({
        len: title.total,
        rate: title.rating
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
          <Average>{(rate/2).toFixed(1)}<span>/5</span></Average>
        </div>
        <div>
          최근 6개월 누적 평점
        </div>
      </article>
    </Title>
  )
}

export default memo(ReviewTitle);