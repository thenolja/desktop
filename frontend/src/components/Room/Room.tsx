import { memo, useState } from 'react';
import DetailRoomInfo from './DetailRoomInfo';
import { Selector, RoomWrapper, Image, NoImage } from './Room.style';
import { RoomInfo } from './RoomInfo';

const Room = ({ room, setSelectedRoom }) => {
  const [modal, setModal] = useState<boolean>(false);

  const handleClick = () => {
    setSelectedRoom(room);
    toggleModal();
  }

  const toggleModal = () => {
    setModal(!modal);
  }

  return (
    <li>
      <DetailRoomInfo room={room} modal={modal} toggleModal={toggleModal} handleClick={handleClick} />
      <RoomWrapper onClick={toggleModal}>
        <Selector />
        <Image>
          {room.images[0] ? (
            <img src={room.images[0].fullSizeUrl} title={room.name} alt={room.name}></img>
          ) : (
            <NoImage src={'https://img.icons8.com/ios/344/no-image.png'} title='noImage' alt='noImage'></NoImage>
          )}
        </Image>
        <RoomInfo name={room.name} maxOccupancy={room.maxOccupancy} price={room.ratePlans[0].price} />
      </RoomWrapper>
    </li>
  );
};

export default memo(Room);
