import { memo } from 'react';
import ModalBody from './ModalBody';
import ModalFooter from './ModalFooter';
import ModalHeader from './ModalHeader';
import { ModalBackground, RoomAmenity } from './Modal.style';
import { ModalType } from './Modal.type';

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
