import { ReviewCount } from "./Title.style"

export const NumberOfTitle = ({ len }: { len: number }) => {
  return (
    <article>
      <ReviewCount>후기<span>({len}개)</span></ReviewCount>
    </article>
  )
}