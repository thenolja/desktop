import HotelDescription from 'components/Detail/HotelDescription';
import Map from 'components/Map/map';
import Amenity from 'components/Amenity/Amenity';
import HotelImage from 'components/HotelImage/HotelImage';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IntroDiv } from './HotelIntro.style';
import { getHotelInfo, getHotelPhotos } from 'src/utils/requests';
import Spinner from 'components/Spinner/Spinner';

const findHotelIntro = (body: Object[]) => {
  interface HotelIntro {
    name?: string;
    tagline?: string;
    formattedScale?: string;
    formattedRating?: string;
    totalcnt?: number;
    starRating: number;
    badgeText: string;
    hotelSize: string[];
    arriving: string;
    leaving: string;
  }

  let editTag = body.propertyDescription.tagline.toString().replace(/[<b></b>]/g, '');
  let formattedScale = Math.round(body.guestReviews.brands.formattedScale / 2);
  let formattedRating = Math.round(body.guestReviews.brands.formattedRating / 2);

  const hotelIntro: HotelIntro = {
    name: body.propertyDescription.name,
    tagline: editTag,
    formattedScale: formattedScale,
    formattedRating: formattedRating,
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
    name?: string;
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
  const [isInfoLoading, setInfoLoading] = useState<boolean>(false);
  const [isImageLoading, setImageLoading] = useState<boolean>(false);

  useEffect(() => {
    const requestbody = async () => {
      const resoponseInfo = await getHotelInfo(hotelId);
      setHotelInfo(findHotelIntro(resoponseInfo));
      setCoordinates(findHotelMap(resoponseInfo));
      setInfoLoading(false);
      const resoponsePhotos = await getHotelPhotos(hotelId);
      setPhotos(settingHotelImgage(resoponsePhotos));
      setImageLoading(false);
    };
    setInfoLoading(true);
    setImageLoading(true);
    requestbody();
  }, []);

  return (
    <>
      {isImageLoading ? <Spinner /> : photos ? <HotelImage photos={photos} /> : ''}

      <IntroDiv>
        {isInfoLoading ? (
          <Spinner />
        ) : hotelInfo ? (
          <>
            <HotelDescription hotelInfo={hotelInfo} />
            <Map coordinates={coordinates} />
          </>
        ) : (
          ''
        )}
      </IntroDiv>
    </>
  );
};

export default HotelIntro;
