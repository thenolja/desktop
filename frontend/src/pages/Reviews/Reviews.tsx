import { memo, useEffect, useState } from 'react';
import { getReviews } from 'src/utils/requests';
import ReviewTitle from '../../components/Review/ReviewTitle';
import { useParams } from 'react-router-dom';
import { ReviewList } from 'components/Review/ReviewList';
import { TopBtn } from 'components/Review/TopBtn';
import Spinner from 'components/Spinner/Spinner';
import { deleteReview, getMockdataReviews } from 'src/utils/reviews';
import swal from 'sweetalert';
import { updateReview } from 'src/utils/users';
import { authUpdate } from 'src/contexts/auth';
import { useDispatch } from 'react-redux';

const Reviews = (): JSX.Element => {
  const { id } = useParams();
  const [hotelId] = useState<string>(id);

  const [target, setTarget] = useState<Element>(null);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [reviews, setReivews] = useState<object[]>([]);
  const [mockDataReviews, setMockDataReviews] = useState<object[]>([]);

  const dispatch = useDispatch();

  let nextUrl = '';
  let currentPage = 1;
  let totalPage = 0;

  const getMoreItem = async () => {
    setIsLoaded(true);
    const presentReview = await getReviews(hotelId, nextUrl);

    currentPage = presentReview.pagination.currentPage;
    totalPage = presentReview.pagination.totalPages;
    nextUrl = presentReview.pagination.nextURL;
    setReivews(currentReviews => [
      ...currentReviews,
      ...presentReview.reviews.hermes.groups[presentReview.reviews.hermes.groups.length - 1].items,
    ]);
    setIsLoaded(false);
  };

  const onIntersect = async ([entry], observer:IntersectionObserver) => {
    if (entry.isIntersecting && !isLoaded && currentPage !== totalPage) {
      observer.unobserve(entry.target);
      await getMoreItem();
      observer.observe(entry.target);
    } else return;
  };

  useEffect(() => {
    const getReviews = async () => {
      const reviews = await getMockdataReviews(hotelId);
      setMockDataReviews(reviews);
    };
    getReviews();
  }, []);

  useEffect(() => {
    let observer:IntersectionObserver;
    if (target) {
      observer = new IntersectionObserver(onIntersect, {
        threshold: 0.5,
      });
      observer.observe(target);
    }
    return () => observer && observer.disconnect();
  }, [target]);

  const handleDelete = (e:React.MouseEvent<HTMLButtonElement>) => {
    swal({
      title: '삭제하시겠습니까?',
      icon: 'info',
      buttons: ['취소', '삭제'],
    }).then(result => {
      if (result) {
        deleteReviewFunc(e.currentTarget.id, e.currentTarget.name);
      }
    });
  };

  const deleteReviewFunc = async (id: string, nickname: string) => {
    const { myReviews } = await updateReview(id, nickname);
    dispatch(authUpdate({ myReviews: myReviews ? myReviews : [] }));
    const review = await deleteReview(id);
    setMockDataReviews(review);
  };

  return (
    <>
      <ReviewTitle />
      <ReviewList reviews={mockDataReviews} handleDelete={handleDelete} />
      <ReviewList reviews={reviews} />
      <TopBtn />
      <div ref={setTarget}>{isLoaded && <Spinner />}</div>
    </>
  );
};

export default memo(Reviews);
