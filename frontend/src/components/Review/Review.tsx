import { ReviewProps } from './Review.type';
import { memo } from 'react';
import { ContentHeader } from './Content/ContentHeader';
import { ContentMain } from './Content/ContentMain';

const Review = ({review, handleDelete}: ReviewProps) => {

  return(
    <article>
      <ContentHeader review={review} />
      <ContentMain review={review} handleDelete={handleDelete} />
    </article>
  )
}

export default memo(Review);