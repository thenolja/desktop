import React, { useRef, useEffect } from 'react';
import { MapWrapper, MapCover, MapAddress } from './map.style';
import { Allbutton } from '../detail/HotelDescription.style';
import GlobalStyle from 'src/GlobalStyle';

const MapDiv = (() => {
  return (
    <>
      <MapCover id="map"></MapCover>
    </>
  );
})();

const Map = ({ ...restProp }) => {
  const kakao = (window as any).kakao;

  useEffect(() => {
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
  }, []);

  const fullscreenMap = () => {};

  return (
    <>
      <MapWrapper>
        {MapDiv}
        <MapAddress>일산동구 태극로 20, 고양시, 경기도</MapAddress>
        <Allbutton>지도로 보기</Allbutton>
      </MapWrapper>
    </>
  );
};

export default Map;
