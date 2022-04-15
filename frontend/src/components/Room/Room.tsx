import { memo, useState } from 'react';
import DetailRoomInfo from './Modal/DetailRoomInfo';
import { Selector, RoomWrapper } from './Room.style';
import { DetailRoomProps, RoomProps } from './Room.types';
import { RoomImage } from './RoomImage';
import { RoomInfo } from './RoomInfo';

const Room = ({ room, setSelector }:{ room:DetailRoomProps, setSelector: (value: RoomProps) => void}):JSX.Element => {
  const [modal, setModal] = useState(false);

  const handleClick = ():void => {
    setSelector(room);
    toggleModal();
  };

  const toggleModal = ():void => {
    setModal(!modal);
  };

  return (
    <li>
      <DetailRoomInfo room={room} modal={modal} toggleModal={toggleModal} handleClick={handleClick} />
      <RoomWrapper onClick={toggleModal}>
        <Selector />
        <RoomImage images={room.images} />
        <RoomInfo name={room.name} maxOccupancy={room.maxOccupancy} price={room.ratePlans[0].price} />
      </RoomWrapper>
    </li>
  );
};

export default memo(Room);
