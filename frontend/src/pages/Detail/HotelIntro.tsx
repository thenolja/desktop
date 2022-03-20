import HotelDescription from 'components/Detail/HotelDescription';
import Map from 'components/Map/Map';
import { useEffect } from 'react';
import { IntroDiv } from './HotelIntro.style';
const HotelIntro = () => {
  return (
    <>
      <IntroDiv>
        <HotelDescription />
        <Map />
      </IntroDiv>
    </>
  );
};

export default HotelIntro;
