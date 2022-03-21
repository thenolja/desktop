import Review from "components/Review/Review";
import ReviewTitle from "components/Review/ReviewTitle";
import { Link } from "react-router-dom";
import {ReviewList, ButtonWrapper, Button} from './TopReviews.style';

const reviews = [
  // mockdata
  {
    id: 1,
    star: 4,
    writeTime: '2022-03-17',
    nickname: '부드러운춤신춤왕0002',
    spec: '[조식 2인+라운지38 칵테일 2잔+ 2박 시 더블세트]야놀자라이브★65m² 트윈룸 오션뷰 - 연박',
    reviewText: `뷰도 좋고 컨디션도 너무좋고 만족했습니다<br/>
    1층 로비 카페 케잌 커피 모두 훌륭했어요<br/>
    호텔커피 비싸기만하고 원두도 맛없는 특급호텔들 많은데 커피광으로써 매우만족 했습니다`
  },
  {
    id: 2,
    star: 4.5,
    writeTime: '2022-03-17',
    nickname: '부드러운춤신춤왕0002',
    spec: '[조식 2인+라운지38 칵테일 2잔+ 2박 시 더블세트]야놀자라이브★65m² 트윈룸 오션뷰 - 연박',
    reviewText: `뷰도 좋고 컨디션도 너무좋고 만족했습니다<br/>
    1층 로비 카페 케잌 커피 모두 훌륭했어요<br/>
    호텔커피 비싸기만하고 원두도 맛없는 특급호텔들 많은데 커피광으로써 매우만족 했습니다`
  },
]

const Reviews = () => {

  const len=reviews.length;
  const sum=reviews.reduce((sum,{star})=>sum+star,0);
  
  return(
    <>
    <ReviewTitle len={len} sum={sum} />

      <ReviewList>
        {reviews.map(review => 
          <Review key={review.id} {...review} />
        )}
      </ReviewList>

      <ButtonWrapper>
        <Button>
          <Link to="/reviews">더보기</Link>
        </Button>
      </ButtonWrapper>
    </>
  )
}

export default Reviews;