import { memo } from "react"
import { ReviewCount } from "./Title.style"

const NumberOfTitle = ({ len }: { len: number }) => {
  return (
    <article>
      <ReviewCount>후기<span>({len}개)</span></ReviewCount>
    </article>
  )
}

export default memo(NumberOfTitle);