import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import {
  ImgageWrapper,
  BigBox,
  SmallBox,
  Image,
  ImageBtn,
  ImageModal,
  ImgTitle,
  SliderWrapper,
  ImageModalTitle,
} from './HotelImage.style';
import { ModalCloseBtn } from '../Map/Map.style';
import Button from '../Carousels/Button/Button';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const HotelImage = () => {
  const [modalFlag, setModalFlag] = useState(false);

  const HotelImageModal = () => {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <Button role="next" onClick={() => {}} />,
      prevArrow: <Button role="prev" onClick={() => {}} />,
    };

    return (
      <ImageModal>
        <ImageModalTitle>
          <ModalCloseBtn
            onClick={() => {
              setModalFlag(false);
            }}
          >
            <FontAwesomeIcon icon={faX} style={{ color: '#FFF' }} size="2x" />
          </ModalCloseBtn>
        </ImageModalTitle>
        <SliderWrapper>
          <Slider {...settings}>
            <div>
              <Image src="https://images.trvl-media.com/hotels/1000000/490000/481300/481269/38f1ec2f.jpg?impolicy=resizecrop&rw=1200&ra=fit"></Image>
            </div>
            <div>
              <Image src="https://images.trvl-media.com/hotels/1000000/490000/481300/481269/38f1ec2f.jpg?impolicy=resizecrop&rw=1200&ra=fit"></Image>
            </div>
            <div>
              <h3>3</h3>
            </div>
          </Slider>
        </SliderWrapper>
        <ImgTitle>기본 이미지</ImgTitle>
      </ImageModal>
    );
  };

  return (
    <>
      <ImgageWrapper>
        <BigBox>
          <div>
            <figure>
              <div>
                <Image src="https://images.trvl-media.com/hotels/1000000/490000/481300/481269/38f1ec2f.jpg?impolicy=resizecrop&rw=1200&ra=fit"></Image>
              </div>
              <ImageBtn onClick={() => setModalFlag(true)}></ImageBtn>
            </figure>
          </div>
        </BigBox>
        <SmallBox>
          <div>
            <figure>
              <div>
                <Image src="https://images.trvl-media.com/hotels/1000000/490000/481300/481269/38f1ec2f.jpg?impolicy=resizecrop&rw=1200&ra=fit"></Image>
              </div>
              <ImageBtn></ImageBtn>
            </figure>
          </div>
          <div>
            <figure>
              <div>
                <Image src="https://images.trvl-media.com/hotels/1000000/490000/481300/481269/38f1ec2f.jpg?impolicy=resizecrop&rw=1200&ra=fit"></Image>
              </div>
            </figure>
          </div>
          <div>
            <figure>
              <div>
                <Image src="https://images.trvl-media.com/hotels/1000000/490000/481300/481269/38f1ec2f.jpg?impolicy=resizecrop&rw=1200&ra=fit"></Image>
              </div>
            </figure>
          </div>
          <div>
            <figure>
              <div>
                <Image src="https://images.trvl-media.com/hotels/1000000/490000/481300/481269/38f1ec2f.jpg?impolicy=resizecrop&rw=1200&ra=fit"></Image>
              </div>
            </figure>
          </div>
        </SmallBox>
      </ImgageWrapper>
      {modalFlag ? HotelImageModal() : ''}
    </>
  );
};

export default HotelImage;
