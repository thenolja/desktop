import { memo, useState } from 'react';
import { Selector, RoomWrapper, Image, RoomImage, SelectBtn, ModalBackground, CloseBtn, ModalHeader, ModalBody, RoomAmenity,ModalFooter, RoomImages } from './Room.style';
import { RoomInfo } from './RoomInfo';

const Room = ({ room, setSelectedRoom }) => {
  const [modal, setModal] = useState(false);
  console.log(room);
  const handleClick = () => {
    setSelectedRoom(room);
    toggleModal();
  };

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <li>
      <ModalBackground hidden={!modal}>
        <RoomAmenity hidden={!modal}>
          <ModalHeader>
            <span>{room.name}</span>
            <CloseBtn onClick={toggleModal} />
          </ModalHeader>
          <ModalBody>
            <RoomImages length={room.images.length}>
              <div>
                {room.images.map((image, index:number) => (
                  <RoomImage key={index.toString()} src={image.fullSizeUrl} title={image.caption} alt={image.caption}></RoomImage>
                ))}
              </div>
            </RoomImages>
            <div className="ratePlans">
              {room.ratePlans[0].features?.map(feature => (
                <div>
                  <span className="title">[{feature.title}]</span>
                  <span>{feature.info}</span>
                </div>
              ))}
            </div>
            <div>
              <span className="amenities">제공 어메니티</span>
              {room.additionalInfo.details.amenities.map((amenity: string) => (
                <p>{amenity}</p>
              ))}
            </div>
          </ModalBody>
          <ModalFooter>
            <SelectBtn onClick={handleClick}>이 객실 선택</SelectBtn>
          </ModalFooter>
        </RoomAmenity>
      </ModalBackground>
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
