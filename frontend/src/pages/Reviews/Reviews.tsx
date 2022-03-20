import axios from "axios";
import Loader from "components/Review/Loader";
import { memo, useEffect, useRef, useState } from "react";
import Review from "../../components/Review/Review";
import ReviewTitle from "../../components/Review/ReviewTitle";
import {ReviewList} from '../Detail/TopReviews.style';

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
  {
    id: 3,
    star: 4.5,
    writeTime: '2022-03-17',
    nickname: '부드러운춤신춤왕0002',
    spec: '[조식 2인+라운지38 칵테일 2잔+ 2박 시 더블세트]야놀자라이브★65m² 트윈룸 오션뷰 - 연박',
    reviewText: `뷰도 좋고 컨디션도 너무좋고 만족했습니다<br/>
    1층 로비 카페 케잌 커피 모두 훌륭했어요<br/>
    호텔커피 비싸기만하고 원두도 맛없는 특급호텔들 많은데 커피광으로써 매우만족 했습니다`
  },
  {
    id: 4,
    star: 4.5,
    writeTime: '2022-03-17',
    nickname: '부드러운춤신춤왕0002',
    spec: '[조식 2인+라운지38 칵테일 2잔+ 2박 시 더블세트]야놀자라이브★65m² 트윈룸 오션뷰 - 연박',
    reviewText: `뷰도 좋고 컨디션도 너무좋고 만족했습니다<br/>
    1층 로비 카페 케잌 커피 모두 훌륭했어요<br/>
    호텔커피 비싸기만하고 원두도 맛없는 특급호텔들 많은데 커피광으로써 매우만족 했습니다`
  },
  {
    id: 5,
    star: 4.5,
    writeTime: '2022-03-17',
    nickname: '부드러운춤신춤왕0002',
    spec: '[조식 2인+라운지38 칵테일 2잔+ 2박 시 더블세트]야놀자라이브★65m² 트윈룸 오션뷰 - 연박',
    reviewText: `뷰도 좋고 컨디션도 너무좋고 만족했습니다<br/>
    1층 로비 카페 케잌 커피 모두 훌륭했어요<br/>
    호텔커피 비싸기만하고 원두도 맛없는 특급호텔들 많은데 커피광으로써 매우만족 했습니다`
  },
  {
    id: 6,
    star: 4.0,
    writeTime: '2022-03-17',
    nickname: '부드러운춤신춤왕0002',
    spec: '[조식 2인+라운지38 칵테일 2잔+ 2박 시 더블세트]야놀자라이브★65m² 트윈룸 오션뷰 - 연박',
    reviewText: `뷰도 좋고 컨디션도 너무좋고 만족했습니다<br/>
    1층 로비 카페 케잌 커피 모두 훌륭했어요<br/>
    호텔커피 비싸기만하고 원두도 맛없는 특급호텔들 많은데 커피광으로써 매우만족 했습니다`
  },
]


// 전체 개수와 별점은 따로 저장해둬야함
// 서버에서 n개씩만 보내주기



const Reviews = ():JSX.Element =>{
  const len=reviews.length;
  const sum=reviews.reduce((sum,{star})=>sum+star,0);

  const [target, setTarget]=useState(null);
  const [isLoaded, setIsLoaded]=useState(false);
  const [nowReviews, setNowReviews]=useState([]);

  const getInfo = async () =>{
    // const res = await axios.get('api/review');
    const res=reviews;
    // setNowReviews(currentReviews=>[...currentReviews, ...res.data]);
    setNowReviews(currentReviews=>[...currentReviews, ...res]);

    console.log('info data add...');
  }

  useEffect(() => {
    // getInfo();
  }, []);

  const getMoreItem = async () => {
    setIsLoaded(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    const res=reviews.splice(0,3);
    
    setNowReviews(currentReviews=>[...currentReviews, ...res]);
    setIsLoaded(false);
  };

  const onIntersect = async ([entry], observer) => {
    if (entry.isIntersecting && !isLoaded) {
      observer.unobserve(entry.target);
      await getMoreItem();
      observer.observe(entry.target);
    }
  };

  useEffect(() => {
    let observer;
    if (target) {
      observer = new IntersectionObserver(onIntersect, {
        threshold: 0.4,
      });
      observer.observe(target);
    }
    return () => observer && observer.disconnect();
  }, [target]);
  
  return(
    <>
      <ReviewTitle len={len} sum={sum} />

      <ReviewList>
        {nowReviews.map((review)=>{
          return (
              <Review key={review.id} {...review} />
            )
          }
        )}  
        <div ref={setTarget}>
          {isLoaded && <Loader />}
        </div>
      </ReviewList>
    </>
  )
}

export default memo(Reviews);