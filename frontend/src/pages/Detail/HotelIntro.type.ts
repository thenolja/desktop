import { MetaTag } from 'components/SeoMetaTag/SEOMetaTag';

export interface HotelIntroType {
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

export interface MapInfo {
  name?: string;
  fullAddress?: string;
  latitude?: number;
  longitude?: number;
}

// type key 와 type 값을 허용하는 인터페이스
export interface KeyValue {
  [propertyDescription: string]: any;
}

export interface InfoFetch {
  hotelInfos?: HotelIntroType;
  hotelMaps?: MapInfo;
  detailSEO?: MetaTag;
}
