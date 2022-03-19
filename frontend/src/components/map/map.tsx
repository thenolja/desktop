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
import GlobalStyle from 'src/GlobalStyle';

const KakaoMapStart = () => {
  const kakao = (window as any).kakao;
  let container = document.getElementById('map');
  let options = {
    center: new kakao.maps.LatLng(37.365264512305174, 127.10676860117488),
    level: 3,
  };
  let map = new kakao.maps.Map(container, options);
  let markerPosition = new kakao.maps.LatLng(37.365264512305174, 127.10676860117488);
  let marker = new kakao.maps.Marker({
    position: markerPosition,
  });
  marker.setMap(map);
};

const Map = ({ ...restProp }) => {
  const [modalFlag, setModalFlag] = useState(false);

  useEffect(() => {
    KakaoMapStart();
  }, [modalFlag]);

  const MapDiv = (() => {
    return (
      <>
        <MapCover
          id="map"
          onClick={() => {
            setModalFlag(true);
          }}
        ></MapCover>
      </>
    );
  })();

  const fullscreenMap = () => {
    KakaoMapStart();
    return (
      <>
        <MapModal>
          <ModalHeader>
            <ModalCloseBtn
              onClick={() => {
                setModalFlag(false);
              }}
            >
              X
            </ModalCloseBtn>
            <ModalTitle />
          </ModalHeader>
          {MapDiv}
        </MapModal>
      </>
    );
  };

  return (
    <>
      <MapWrapper>
        {modalFlag ? fullscreenMap() : ''}
        {MapDiv}
        <MapAddress>일산동구 태극로 20, 고양시, 경기도</MapAddress>
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
