import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Title, ReviewCount, Star, Average} from './ReviewTitle.style';

const ReviewTitle=({len, sum})=>{

  return (
    <Title>
      <article>
        <ReviewCount>후기<span>({len}개)</span></ReviewCount>
      </article>
      <article>
        <div>
          <Star><FontAwesomeIcon icon={faStar} /></Star>
          <Average>{(sum/len).toFixed(2)}<span>/5</span></Average>
        </div>
        <div>
          최근 6개월 누적 평점
        </div>
      </article>
    </Title>
  )
}

export default ReviewTitle;