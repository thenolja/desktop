import React, { useRef, useEffect, useState } from 'react';
import {
  MapWrapper,
  MapCover,
  MapAddress,
  MapModal,
  ModalHeader,
  ModalTitle,
  ModalCloseBtn,
  ModalMapWrapper,
} from './Map.style';
import { Allbutton } from '../Detail/HotelDescription.style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import kakaoMapStart from '../../utils/kakaoMapStart';

const Map = ({ coordinates }) => {
  const [modalFlag, setModalFlag] = useState(false);

  useEffect(() => {
    kakaoMapStart(coordinates.latitude, coordinates.longitude);
  }, [coordinates]);

  const fullscreenMap = () => {
    kakaoMapStart(coordinates.latitude, coordinates.longitude);

    return (
      <>
        <MapModal>
          <ModalHeader>
            <ModalCloseBtn
              onClick={() => {
                setModalFlag(false);
              }}
            >
              <FontAwesomeIcon icon={faX} />
            </ModalCloseBtn>
            <ModalTitle />
            {coordinates.name}
          </ModalHeader>
          <MapCover
            id="map"
            onClick={() => {
              setModalFlag(true);
            }}
            style={{ width: '100vw', height: '100vh' }}
          ></MapCover>
        </MapModal>
      </>
    );
  };

  return (
    <>
      <MapWrapper>
        {modalFlag ? fullscreenMap() : ''}
        <MapCover
          id="map"
          onClick={() => {
            setModalFlag(true);
          }}
        ></MapCover>
        <MapAddress>{coordinates.fullAddress}</MapAddress>
        <Allbutton
          onClick={() => {
            setModalFlag(true);
          }}
        >
          지도로 보기
        </Allbutton>
      </MapWrapper>
    </>
  );
};

export default Map;
