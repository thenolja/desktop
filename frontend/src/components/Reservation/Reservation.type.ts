import { Dispatch, SetStateAction } from 'react';

export interface MyReview {
  id: number;
  hotelId: string;
  reservationId: number;
  star: number;
  writeTime: string;
  nickname: string;
  spec: string;
  reviewText: string;
}

export interface ReservationItem {
  id: number;
  occupancy: number;
  adults: number;
  children: number;
  checkInDate: string;
  checkOutDate: string;
  review: MyReview | null;
  photo: string;
  name: string;
  spec: string;
}

export interface PostingReviewProps {
  setReservationList: Dispatch<SetStateAction<ReservationItem[]>>;
  setDialog: Dispatch<SetStateAction<boolean>>;
}
