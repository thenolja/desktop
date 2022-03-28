import { memo, useState } from 'react';
import DetailRoomInfo from './DetailRoomInfo';
import { Selector, RoomWrapper, Image } from './Room.style';
import { RoomInfo } from './RoomInfo';

const Room = ({ room, setSelectedRoom }) => {
  const [modal, setModal] = useState(false);

  const handleClick = () => {
    setSelectedRoom(room);
    toggleModal();
  };

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <li>
      <DetailRoomInfo room={room} modal={modal} toggleModal={toggleModal} handleClick={handleClick} />
      <RoomWrapper onClick={toggleModal}>
        <Selector />
        <Image>
          {room.images[0] ? (
            <img src={room.images[0].fullSizeUrl}></img>
          ) : (
            <img src={'https://img.icons8.com/ios/344/no-image.png'} style={{ width: '30px', height: '30px' }}></img>
          )}
        </Image>
        <RoomInfo name={room.name} maxOccupancy={room.maxOccupancy} price={room.ratePlans[0].price} />
      </RoomWrapper>
    </li>
  );
};

export default memo(Room);
