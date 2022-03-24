import HotelDescription from 'components/detail/HotelDescription';
import Map from 'components/Map/map';
import Amenity from 'components/Amenity/Amenity';
import HotelImage from 'components/HotelImage/HotelImage';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IntroDiv } from './HotelIntro.style';
import { getHotelInfo, getHotelPhotos } from 'src/utils/requests';

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

  let editTag = body.propertyDescription.tagline.toString().replace(/[<b></b>]/g, '');

  const hotelIntro: HotelIntro = {
    name: body.propertyDescription.name,
    tagline: editTag,
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

const findHotelMap = (body: Object[]) => {
  interface MapInfo {
    name: string;
    fullAddress?: string;
    latitude?: number;
    longitude?: number;
  }

  const hotelMapinfo: MapInfo = {
    name: body.propertyDescription.name,
    fullAddress: body.propertyDescription.localisedAddress.fullAddress,
    latitude: body.pdpHeader.hotelLocation.coordinates.latitude,
    longitude: body.pdpHeader.hotelLocation.coordinates.longitude,
  };
  return hotelMapinfo;
};

const settingHotelImgage = (imgsArray: object[]): string[] => {
  let sizeUrl = '?impolicy=fcrop&w=1000&h=666&q=medium';

  return imgsArray.map(img => img.baseUrl.replace('{size}', 'z').concat(sizeUrl));
};

const HotelIntro = () => {
  const { id } = useParams();

  const [hotelId, setHotelId] = useState<number>(id);
  const [hotelInfo, setHotelInfo] = useState<object>({});
  const [coordinates, setCoordinates] = useState<object>({});
  const [photos, setPhotos] = useState<string[]>([]);

  useEffect(() => {
    const requestbody = async () => {
      const resoponseInfo = await getHotelInfo(hotelId);
      setHotelInfo(findHotelIntro(resoponseInfo));
      setCoordinates(findHotelMap(resoponseInfo));

      const resoponsePhotos = await getHotelPhotos(hotelId);
      setPhotos(settingHotelImgage(resoponsePhotos));
    };
    requestbody();
  }, []);

  return (
    <>
      <HotelImage photos={photos} />
      <IntroDiv>
        <HotelDescription hotelInfo={hotelInfo} />
        <Map coordinates={coordinates} />
      </IntroDiv>
    </>
  );
};

export default HotelIntro;
