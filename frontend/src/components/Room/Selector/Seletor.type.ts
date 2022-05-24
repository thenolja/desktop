import { RoomProps } from '../Room.types';

export interface SelectorType {
  startDate?: string;
  endDate?: string;
  selectedRoom: RoomProps;
  hotelId: string;
  setSessionStorage: () => void;
}
