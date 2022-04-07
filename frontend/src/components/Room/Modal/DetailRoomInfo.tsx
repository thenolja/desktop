import { memo } from 'react';
import ModalBody from './Modal/ModalBody';
import ModalFooter from './Modal/ModalFooter';
import ModalHeader from './Modal/ModalHeader';
import { ModalBackground, RoomAmenity } from './Room.style';
import { ModalType } from './Room.types';

const DetailRoomInfo = ({ room, modal, toggleModal, handleClick }: ModalType): JSX.Element => {
  return (
    <ModalBackground hidden={!modal}>
      <RoomAmenity hidden={!modal}>
        <ModalHeader name={room.name} toggleModal={toggleModal} />
        <ModalBody images={room.images} features={room.ratePlans[0].features} amenities={room.additionalInfo.details.amenities} />
        <ModalFooter handleClick={handleClick} />
      </RoomAmenity>
    </ModalBackground>
  )
}

export default memo(DetailRoomInfo);
