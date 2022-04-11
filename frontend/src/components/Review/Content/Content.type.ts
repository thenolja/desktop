export interface ReviewType{
  review: {
    id?: number;
    hotelId?: string;
    reservationId?: number;
    star?: number;
    writeTime?: string;
    nickname?: string;
    spec?: string;
    reviewText?: string;

    itineraryId?: string;
    rating?: number;
    reviewDate?: string;
    reviewer?: {
      name: string;
    };
    tripTypeText?: string;
    description?: string;
  };
}

export interface ImojiType{
  rating: number,
  star: number
}