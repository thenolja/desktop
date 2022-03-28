const kakaoMapStart = (latitude: number, longitude: number) => {
  const kakao = (window as any).kakao;
  const container = document.getElementById('map');
  const options = {
    center: new kakao.maps.LatLng(latitude, longitude),
    level: 3,
  };
  const map = new kakao.maps.Map(container, options);
  const markerPosition = new kakao.maps.LatLng(latitude, longitude);
  const marker = new kakao.maps.Marker({
    position: markerPosition,
  });
  marker.setMap(map);
  map.relayout();
};

export default kakaoMapStart;
