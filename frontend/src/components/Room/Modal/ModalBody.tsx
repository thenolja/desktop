import { memo, useState } from "react";
import { ModalBodyWrapper, RoomImage } from "./Modal.style";
import Slider from 'react-slick';
import Button from "components/Carousels/Button/Button";
import { BodyType } from "./Modal.type";

const ModalBody = ({ images, features, amenities }: BodyType) => {
  const [initialslider, setInitialslider] = useState<number>(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: initialslider,
    nextArrow: <Button role="next" onClick={() => { }} />,
    prevArrow: <Button role="prev" onClick={() => { }} />,
  };

  return (
    <ModalBodyWrapper>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} >
            <RoomImage src={image.fullSizeUrl} title={image.caption} alt={image.caption}></RoomImage>
          </div>
        ))}
      </Slider>
      <div className="ratePlans">
        {features?.map(feature => (
          <div key={feature.title}>
            <span className="title">[{feature.title}]</span>
            <span>{feature.info}</span>
          </div>
        ))}
      </div>
      <div>
        <span className="amenities">제공 어메니티</span>
        {amenities.map(amenity => (
          <p key={amenity}>{amenity}</p>
        ))}
      </div>
    </ModalBodyWrapper>
  )
}

export default memo(ModalBody);