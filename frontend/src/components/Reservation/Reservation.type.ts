import { Dispatch, SetStateAction } from 'react';
import { ReviewProps } from '../Review/Review.type';

export interface ReservationItem {
  id: number;
  occupancy: number;
  adults: number;
  children: number;
  checkInDate: string;
  checkOutDate: string;
  review: ReviewProps;
  photo: string;
  name: string;
  spec: string;
}

export interface PostingReviewProps {
  setReservationList: Dispatch<SetStateAction<ReservationItem[]>>;
  setDialog: Dispatch<SetStateAction<boolean>>;
}
