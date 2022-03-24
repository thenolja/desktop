import axios from 'axios';

const patchReview = async ({ id, userId, reservationId, star, writeTime, nickname, spec, reviewText }) => {
  return await axios
    .patch(`/api/reviews?userId=${userId}`, {
      id: id,
      reservationId: reservationId,
      star: star,
      writeTime: writeTime.toISOString().slice(0, 10),
      nickname: nickname,
      spec: spec,
      reviewText: reviewText,
    })
    .then(({ data }) => {
      console.log('receive! ', data);
      return data;
    })
    .catch(e => console.log(e));
};

export { patchReview };
