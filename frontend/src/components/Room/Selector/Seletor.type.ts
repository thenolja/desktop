import { RoomProps } from "../Room.types";

export interface SelectorType{
  selectedRoom: RoomProps;
  hotelId: string;
  setSessionStorage: ()=> void;
}