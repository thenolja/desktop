export interface ReviewProps{
  id?: number;
  star?: number;
  writeTime?: string;
  nickname?: string;
  spec?: string;
  reviewText?: string;
}

export interface ReviewType{
  review:{
    itineraryId?:string;
    rating?:number;
    reviewDate?:string;
    reviewer?:{
      name?:string;
    }
    tripTypeText?:string;
    description?:string;
  }
}

export interface ReviewsType{
  reviews: object[];
}