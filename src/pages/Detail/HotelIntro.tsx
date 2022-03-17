import HotelDescription from 'components/detail/HotelDescription';
import Map from 'components/map/map';
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
