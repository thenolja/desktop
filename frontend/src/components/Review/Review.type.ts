import { MouseEventHandler } from "react";
import { ReviewType } from "./Content/Content.type";

export interface ReviewProps extends ReviewType{
  handleDelete?: MouseEventHandler<HTMLButtonElement>
}

export interface ReviewsType {
  reviews: object[];
  handleDelete?: MouseEventHandler<HTMLButtonElement>
}
