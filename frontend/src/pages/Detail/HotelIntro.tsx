import { useCallback, useState } from 'react';
import { useParams } from 'react-router-dom';
import useSWR, { SWRConfig } from 'swr';

import HotelDescription from 'components/Detail/HotelDescription';
import Map from 'components/Map/Map';
import HotelImage from 'components/HotelImage/HotelImage';
import { IntroDiv } from './HotelIntro.style';
import { getHotelInfo, getHotelPhotos } from 'src/utils/requests';
import Spinner from 'components/Spinner/Spinner';
import { MetaTag, SEOMetaTag } from 'components/SeoMetaTag/SEOMetaTag';
import { KeyValue, HotelIntroType, MapInfo, InfoFetch } from './HotelIntro.type';

const findHotelIntro = (body: KeyValue): HotelIntroType => {
  let editTag = body.propertyDescription.tagline.toString().replace(/[<b></b>]/g, '');
  let formattedScale = (body.guestReviews.brands.formattedScale / 2).toFixed(1);
  const formattedRating = (body.guestReviews.brands.formattedRating / 2).toFixed(1);

  return {
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
};

const findHotelMap = (body: KeyValue): MapInfo => {
  return {
    name: body.propertyDescription.name,
    fullAddress: body.propertyDescription.localisedAddress.fullAddress,
    latitude: body.pdpHeader.hotelLocation.coordinates.latitude,
    longitude: body.pdpHeader.hotelLocation.coordinates.longitude,
  };
};

const settingHotelImgage = (imgsArray: KeyValue[]): string[] => {
  let sizeUrl = '?impolicy=fcrop&w=1000&h=666&q=medium';

  return imgsArray.map(img => img.baseUrl.replace('{size}', 'z').concat(sizeUrl));
};

const settingSEOTags = (body: KeyValue): MetaTag => {
  return {
    title: body.propertyDescription.name,
    description: body.propertyDescription.tagline.toString().replace(/[<b></b>]/g, ''),
    keywords: body.propertyDescription.localisedAddress.fullAddress,
  };
};

const HotelIntro = () => {
  const { id: hotelId } = useParams();
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  const setInfos = async (): Promise<InfoFetch> => {
    const responseInfo = await getHotelInfo(hotelId);
    return {
      hotelInfos: findHotelIntro(responseInfo),
      hotelMaps: findHotelMap(responseInfo),
      detailSEO: settingSEOTags(responseInfo),
    };
  };
  const setPhotos = async () => {
    const responsePhoto = await getHotelPhotos(hotelId);

    return settingHotelImgage(responsePhoto);
  };

  const getPhotosFetcher = () => {
    return new Promise(resolve => {
      resolve(setPhotos());
    });
  };

  const getInfosFetcher = () => {
    return new Promise(resolve => {
      resolve(setInfos());
    });
  };

  const { data: infos, error: infoError } = useSWR('/api/hotelinfo', getInfosFetcher);
  const { data: photosData, error: photoError } = useSWR('/api/hotelimg', getPhotosFetcher);

  return (
    <SWRConfig value={{ provider: cache => cache }}>
      {photosData && <HotelImage photos={photosData} />}
      <IntroDiv>
        {infos && (
          <>
            <SEOMetaTag metas={infos.detailSEO} />
            <HotelDescription hotelInfo={infos.hotelInfos} />
            <Map coordinates={infos.hotelMaps} />
          </>
        )}
        {!infos && !infoError && <Spinner />}
      </IntroDiv>
    </SWRConfig>
  );
};

export default HotelIntro;
