import Button from 'components/Carousels/Button/Button';
import { memo, useState } from 'react';
import Slider from 'react-slick';
import { RoomImage, SelectBtn, ModalBackground, CloseBtn, ModalHeader, ModalBody, RoomAmenity, ModalFooter } from './Room.style';
import { ModalType } from './Room.types';

const DetailRoomInfo=({room, modal, toggleModal, handleClick}:ModalType)=> {
  const [initialslider, setInitialslider] = useState<number>(0);
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
    initialSlide: initialslider,
    nextArrow: <Button role="next" onClick={() => {}} />,
    prevArrow: <Button role="prev" onClick={() => {}} />,
  };

  return (
    <ModalBackground hidden={!modal}>
        <RoomAmenity hidden={!modal}>
          <ModalHeader>
            <span>{room.name}</span>
            <CloseBtn onClick={toggleModal} />
          </ModalHeader>
          <ModalBody>
            <Slider {...settings}>
              {room.images.map((image, index) => (
                <div key={index} >
                  <RoomImage src={image.fullSizeUrl} title={image.caption} alt={image.caption}></RoomImage>
                </div>
              ))}
            </Slider>
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
