import HotelDescription from 'components/detail/HotelDescription';
import Map from 'components/Map/map';
import Amenity from 'components/Amenity/Amenity';
import { useEffect, useState } from 'react';
import { IntroDiv } from './HotelIntro.style';
import { getHotelInfo } from 'src/utils/requests';

const findHotelIntro = (body: Object[]) => {
  // 이름, 평점, 숙소소개,
  interface HotelIntro {
    name?: string;
    tagline?: string;
    formattedScale?: string; //몇점 만점?
    formattedRating?: string; // 해당  호텔 점수
    totalcnt?: number; // 이용 후기 개수
    starRating: number; // 호텔 등급
    badgeText: string;
    hotelSize: string[]; // 호텔 사이즈
    arriving: string; //  체크인, 체크아웃 가져올 수 있음 //
    leaving: string;
  }

  const hotelIntro: HotelIntro = {
    name: body.propertyDescription.name,
    tagline: body.propertyDescription.tagline,
    formattedScale: body.guestReviews.brands.formattedScale,
    formattedRating: body.guestReviews.brands.formattedRating,
    totalcnt: body.guestReviews.brands.total,
    starRating: body.propertyDescription.starRating,
    badgeText: body.guestReviews.brands.badgeText,
    hotelSize: body.atAGlance.keyFacts.hotelSize,
    arriving: body.atAGlance.keyFacts.arrivingLeaving[0],
    leaving: body.atAGlance.keyFacts.arrivingLeaving[1],
  };

  return hotelIntro;
};

const HotelIntro = () => {
  const [hotelId, setHotelId] = useState<number>(171138);
  const [hotelInfo, setHotelInfo] = useState<object>({});
  const [coordinates, setCoordinates] = useState<object>({}); // 위도, 경도
  const [address, setAddress] = useState<string>(''); //주소

  useEffect(() => {
    const requestbody = async () => {
      const overviewSections = await getHotelInfo(hotelId);
      setHotelInfo(findHotelIntro(overviewSections));
      setAddress(overviewSections.propertyDescription.localisedAddress.fullAddress);
      setCoordinates(overviewSections.pdpHeader.hotelLocation.coordinates);
      console.log(coordinates);
      // console.log(overviewSections.pdpHeader.hotelLocation.coordinates);
    };
    requestbody();
  }, []);

  return (
    <>
      <IntroDiv>
        <HotelDescription hotelInfo={hotelInfo} />
        <Map coordinates={coordinates} address={address} />
      </IntroDiv>
      <Amenity></Amenity>
    </>
  );
};

export default HotelIntro;
