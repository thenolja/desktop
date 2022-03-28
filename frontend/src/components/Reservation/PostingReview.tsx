import PostingReviewContainer from './PostingReview.style';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { createPortal } from 'react-dom';
import { useState } from 'react';
import { patchReview } from 'src/utils/reviews';
import { selectAuth } from 'src/contexts/auth';
import { useAppSelector } from 'src/contexts/state.type';

const PostingReview = ({ setDialog, selectedItem, setReservationList }) => {
  const { id: userId, nickname } = useAppSelector(selectAuth);
  const { id, photo, name, spec, checkInDate, checkOutDate, review } = selectedItem;
  const [reviewText, setReviewText] = useState<string>(review ? review.reviewText : '');
  const [rating, setRating] = useState<string>(review ? review.star : '0');

  const updateReview = async e => {
    e.preventDefault();

    const myReview = {
      id: review?.id,
      userId: userId,
      reservationId: id,
      star: rating,
      writeTime: new Date(),
      nickname: nickname,
      spec: spec,
      reviewText: reviewText,
    };

    const updatedReview = await patchReview(myReview);
    setReservationList(items => items.map(item => (item.id === id ? { ...item, review: updatedReview } : item)));
    setDialog(false);
  };

  const hanldeRating = ({ target }) => {
    if (target.name !== 'rating') return;
    target.checked = true;
    setRating(target.value);
  };

  const handleChange = ({ target }) => {
    setReviewText(target.value);
  };

  return createPortal(
    <PostingReviewContainer>
      <section>
        <h2>바른후기 남기기</h2>
        <div className="img-container">
          <img src={photo} alt={name} />
        </div>
        <dl>
          <dt>이용기간</dt>
          <dd>
            {checkInDate}~{checkOutDate}
          </dd>
          <dt>숙소명</dt>
          <dd>{name}</dd>
          <dt>상품명</dt>
          <dd>{spec}</dd>
        </dl>
        <button className="cancel" onClick={() => setDialog(false)}>
          닫기
        </button>
        <form onSubmit={updateReview}>
          <fieldset>
            <legend>이곳에서의 경험은 어떠셨나요?</legend>
            <div className="rating-container" onChange={hanldeRating}>
              <input type="radio" id="5-stars" name="rating" value="5" />
              <label htmlFor="5-stars">
                <FontAwesomeIcon icon={faStar} />
              </label>
              <input type="radio" id="4-stars" name="rating" value="4" />
              <label htmlFor="4-stars">
                <FontAwesomeIcon icon={faStar} />
              </label>
              <input type="radio" id="3-stars" name="rating" value="3" />
              <label htmlFor="3-stars">
                <FontAwesomeIcon icon={faStar} />
              </label>
              <input type="radio" id="2-stars" name="rating" value="2" />
              <label htmlFor="2-stars">
                <FontAwesomeIcon icon={faStar} />
              </label>
              <input type="radio" id="1-stars" name="rating" value="1" />
              <label htmlFor="1-stars">
                <FontAwesomeIcon icon={faStar} />
              </label>
            </div>
            <textarea
              onChange={handleChange}
              value={reviewText}
              placeholder={
                reviewText ? '' : '이곳에서 머물렀던 기억을 자세히 말해줄 수 있나요? (5자 이상 작성해주세요)'
              }
            ></textarea>
          </fieldset>
          <button className="submit">등록하기</button>
        </form>
      </section>
      <div className="layer"></div>
    </PostingReviewContainer>,
    document.getElementById('dialog'),
  );
};

export default PostingReview;
