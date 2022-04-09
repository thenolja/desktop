import axios from 'axios';

const patchReview = async ({ id, userId, reservationId, hotelAPIId, star, writeTime, nickname, spec, reviewText }) => {
  return await axios
    .patch(`/api/reviews?userId=${userId}`, {
      id: id,
      reservationId: reservationId,
      hotelId: hotelAPIId,
      star: star,
      writeTime: writeTime.toISOString().slice(0, 10),
      nickname: nickname,
      spec: spec,
      reviewText: reviewText,
    })
    .then(({ data }) => {
      return data;
    })
    .catch(e => console.log(e));
};

const getMockdataReviews = async (id: string) => {
  return await axios
    .get(`/api/reviews/${id}`)
    .then(({ data }) => data)
    .catch(e => console.log(e));
};

const getMockdataReviewsTitle = async (id: string):Promise<[mockTotal:number, mockRating:number]> => {
  return await axios
    .get(`/api/reviews/title/${id}`)
    .then(({ data }) => data)
    .catch(e => console.log(e));
};

const deleteReview =async (id:string) => {
  return await axios.delete(`/api/review/${id}`)
    .then(({data})=>data)
    .catch(e=>console.log(e));
}

export { patchReview, getMockdataReviews, getMockdataReviewsTitle, deleteReview };
