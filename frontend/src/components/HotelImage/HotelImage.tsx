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
import { ModalCloseBtn } from '../Map/map.style';
import Button from '../Carousels/Button/Button';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Spinner from '../Spinner/Spinner';

const HotelImage = ({ photos }) => {
  const [initialslider, setInitialslider] = useState<number>(0);
  const [modalFlag, setModalFlag] = useState(false);

  const HotelImageModal = () => {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: initialslider,
      nextArrow: <Button role="next" onClick={() => {}} />,
      prevArrow: <Button role="prev" onClick={() => {}} />,
    };

    return (
      <ImageModal>
        <ImageModalTitle>
          <button
            onClick={() => {
              setModalFlag(false);
            }}
          >
            <FontAwesomeIcon icon={faX} style={{ color: '#FFF' }} size="2x" />
          </button>
        </ImageModalTitle>
        <SliderWrapper>
          <div>
            <Slider {...settings}>
              {photos.map((photo, index) => (
                <div key={index.toString()}>
                  <Image src={photo}></Image>
                </div>
              ))}
            </Slider>
          </div>
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
              <div>{photos[0] ? <Image src={photos[0]}></Image> : <Spinner></Spinner>}</div>
              <ImageBtn
                onClick={() => {
                  setModalFlag(true);
                }}
              ></ImageBtn>
            </figure>
          </div>
        </BigBox>
        <SmallBox>
          {photos.slice(1, 5).map((url, index) => (
            <div key={index.toString()}>
              <figure>
                <div>
                  <Image src={url}></Image>
                </div>
                <ImageBtn
                  onClick={() => {
                    setModalFlag(true);
                    setInitialslider(index + 1);
                  }}
                ></ImageBtn>
              </figure>
            </div>
          ))}
        </SmallBox>
      </ImgageWrapper>
      {modalFlag ? HotelImageModal() : ''}
    </>
  );
};

export default HotelImage;
