import { DetailRoomProps } from "../Room.types";

export interface BodyType{
  images: [{
    fullSizeUrl: string;
    caption: string;
  }],
  features: [{
    title: string,
    info: string,
  }],
  amenities: string[]
}

export interface ModalType {
  room: DetailRoomProps,
  modal: boolean,
  toggleModal: () => void;
  handleClick: () => void;
}