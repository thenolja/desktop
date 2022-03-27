import { memo } from 'react';
import { RoomImages, RoomImage, SelectBtn, ModalBackground, CloseBtn, ModalHeader, ModalBody, RoomAmenity, ModalFooter } from './Room.style';
import { ModalType } from './Room.types';

const DetailRoomInfo=({room, modal, toggleModal, handleClick}:ModalType)=> {
  return (
    <ModalBackground hidden={!modal}>
        <RoomAmenity hidden={!modal}>
          <ModalHeader>
            <span>{room.name}</span>
            <CloseBtn onClick={toggleModal} />
          </ModalHeader>
          <ModalBody>
            <RoomImages length={room.images.length}>
              <div>
                {room.images.map((image, index) => (
                    <RoomImage key={index} src={image.fullSizeUrl} title={image.caption} alt={image.caption}></RoomImage>
                ))}
              </div>
            </RoomImages>
            <div className="ratePlans">
              {room.ratePlans[0].features?.map(feature => (
                <div key={feature.title}>
                  <span className="title">[{feature.title}]</span>
                  <span>{feature.info}</span>
                </div>
              ))}
            </div>
            <div>
              <span className="amenities">제공 어메니티</span>
              {room.additionalInfo.details.amenities.map(amenity => (
                <p key={amenity}>{amenity}</p>
              ))}
            </div>
          </ModalBody>
          <ModalFooter>
            <SelectBtn onClick={handleClick}>이 객실 선택</SelectBtn>
          </ModalFooter>
        </RoomAmenity>
      </ModalBackground>
  )
}

export default memo(DetailRoomInfo);