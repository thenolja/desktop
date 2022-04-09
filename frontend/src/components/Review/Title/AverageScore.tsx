import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Average, Star } from './Title.style';

export const AverageScore = ({ rate }: { rate: string }) => {
  return (
    <article>
      <div>
        <Star><FontAwesomeIcon icon={faStar} /></Star>
        <Average>{rate}<span>/5</span></Average>
      </div>
      <div>
        최근 6개월 누적 평점
      </div>
    </article>
  )
}