import { MouseEvent } from 'react';

export default interface locationType {
  latitude: number;
  longitude: number;
}

export interface ulProps {
  onClick: (event: MouseEvent<HTMLUListElement>) => void;
}
