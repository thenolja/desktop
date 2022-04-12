import { Button, MainWrapper, Text } from "./Content.style";
import { useAppSelector } from 'src/contexts/state.type';
import { selectAuth } from 'src/contexts/auth';
import { ReviewProps } from "../Review.type";

export const ContentMain = ({ review, handleDelete }: ReviewProps) => {
  const { nickname } = useAppSelector(selectAuth);

  return (
    <MainWrapper>
      <Text>
        {review.description ? review.description : review.reviewText}
      </Text>
      {(review.reviewer ? review.reviewer.name : review.nickname) === nickname && <Button id={review.id.toString()} name={nickname} onClick={handleDelete}>삭제</Button>}
    </MainWrapper>
  )
}