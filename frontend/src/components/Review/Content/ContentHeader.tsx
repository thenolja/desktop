import { FlexBox } from "./Content.style"
import { ReviewType } from "./Content.type"
import { ContentImoji } from "./ContentImoji"
import { ContentInfo } from "./ContentInfo"

export const ContentHeader = ({ review }: ReviewType) => {
  return (
    <FlexBox>
      <ContentImoji rating={review.rating} star={review.star} />
      <ContentInfo review={review} />
    </FlexBox>
  )
}