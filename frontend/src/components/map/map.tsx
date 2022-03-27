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
} from './map.style';
import { Allbutton } from '../detail/HotelDescription.style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';

const KakaoMapStart = (latitude: number, longitude: number) => {
  const kakao = (window as any).kakao;
  let container = document.getElementById('map');
  let options = {
    center: new kakao.maps.LatLng(latitude, longitude),
    level: 3,
  };
  let map = new kakao.maps.Map(container, options);
  let markerPosition = new kakao.maps.LatLng(latitude, longitude);
  let marker = new kakao.maps.Marker({
    position: markerPosition,
  });
  marker.setMap(map);
  map.relayout();
};

const Map = ({ coordinates }) => {
  const [modalFlag, setModalFlag] = useState(false);

  useEffect(() => {
    KakaoMapStart(coordinates.latitude, coordinates.longitude);
  }, [coordinates, modalFlag]);

  const fullscreenMap = () => {
    KakaoMapStart(coordinates.latitude, coordinates.longitude);

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