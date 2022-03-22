import PostingReviewContainer from './PostingReview.style';
import { faStar, faCamera } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { createPortal } from 'react-dom';
import { useCallback, useState, useMemo } from 'react';

const PostingReview = ({ showDialog, setDialog }) => {
  const [imageSrc, setImageSrc] = useState<string>('');

  const previewImage = useCallback((input: EventTarget & HTMLInputElement): void => {
    if (!input.files[0]) return;
    const url = URL.createObjectURL(input.files[0]);
    setImageSrc(url);
  }, []);

  // item
  const MemoizedInfo = useMemo(
    () => (
      <dl>
        <dt>방문정보</dt>
        <dd>더놀자 예약/숙박</dd>
        <dt>숙소명</dt>
        <dd>건대호텔스타</dd>
        <dt>객실정보</dt>
        <dd>디럭스</dd>
      </dl>
    ),
    [],
  );
  const MemoizedStar = useMemo(
    () => (
      <div className="rating-container">
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
    ),
    [],
  );

  return createPortal(
    <PostingReviewContainer hidden={!showDialog}>
      <section>
        <h2>바른후기 남기기</h2>
        {MemoizedInfo}
        <button className="cancel" onClick={() => setDialog(false)}>
          닫기
        </button>
        <form>
          <fieldset>
            <legend>이곳에서의 경험은 어떠셨나요?</legend>
            {MemoizedStar}
            <textarea placeholder="이곳에서 머물렀던 기억을 자세히 말해줄 수 있나요? (5자 이상 작성해주세요)"></textarea>
            <div className="img-container">
              <img src={imageSrc ? imageSrc : '/src/assets/user.svg'} alt="리뷰" />
              <input id="file" type="file" required onChange={e => previewImage(e.target)} />
              <label htmlFor="file">
                <FontAwesomeIcon icon={faCamera} size="3x" />
              </label>
            </div>
          </fieldset>
          <button className="submit" onClick={() => setDialog(false)}>
            등록하기
          </button>
        </form>
      </section>
    </PostingReviewContainer>,
    document.getElementById('dialog'),
  );
};

export default PostingReview;
