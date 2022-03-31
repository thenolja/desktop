import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { setDocumentTitle, setMetaKeywords, setMetaDescription } from './setDocumentTitle';

export interface Metas {
  metas?: MetaTag;
}
export interface MetaTag {
  title?: string;
  description?: string;
  keywords?: string;
}
export const MetaTagDefaults: MetaTag = {
  title: import.meta.env.VITE_APP_TITLE.toString(),
  description:
    '더놀자, thenolja, 모텔, 여행, 제주도호텔, 호텔 예약, 레지던스, 리조트, 스파 펜션, 숙소 예약 사이트, 숙박 예약 사이트, 국내여행지추천, 국내1박2일여행, 국내당일치기여행, 국내 여행, 키즈펜션, 펜션, 호캉스, 풀빌라, 카라반, 워터파크, 에버랜드, 캐리비안베이, 케리비안베이, 대구이월드야놀자스카이드롭, 대구이월드자유이용권, 원마운트, 방탈출카페, 서울데이트, 아쿠아리움, 놀러갈만한곳, 주말나들이, 캠핑, 캠핑장, 게스트하우스, 키즈풀빌라, 가평풀빌라, 서울호캉스',
  keywords:
    '국내 호텔 모텔 펜션/풀빌라는 물론 레저/액티비티에 해외 숙소까지 모두 초특가! 지금 더놀자로 최대 80% 할인받으세요.',
};

export const SEOMetaTag = ({
  metas = {
    title: import.meta.env.VITE_APP_TITLE.toString(),
    description:
      '더놀자, thenolja, 모텔, 여행, 제주도호텔, 호텔 예약, 레지던스, 리조트, 스파 펜션, 숙소 예약 사이트, 숙박 예약 사이트, 국내여행지추천, 국내1박2일여행, 국내당일치기여행, 국내 여행, 키즈펜션, 펜션, 호캉스, 풀빌라, 카라반, 워터파크, 에버랜드, 캐리비안베이, 케리비안베이, 대구이월드야놀자스카이드롭, 대구이월드자유이용권, 원마운트, 방탈출카페, 서울데이트, 아쿠아리움, 놀러갈만한곳, 주말나들이, 캠핑, 캠핑장, 게스트하우스, 키즈풀빌라, 가평풀빌라, 서울호캉스',
    keywords:
      '국내 호텔 모텔 펜션/풀빌라는 물론 레저/액티비티에 해외 숙소까지 모두 초특가! 지금 더놀자로 최대 80% 할인받으세요.',
  },
}: Metas) => {
  let [metainfo, setmetainfo] = useState<MetaTag>(MetaTagDefaults);

  return (
    <Helmet>
      <title>{metas.title}</title>

      <meta name="description" content={metas.description} />
      <meta name="keywords" content={metas.keywords} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={metas.title} />
      <meta property="og:site_name" content={metas.title} />
      <meta property="og:description" content={metas.description} />

      <meta name="twitter:title" content={metas.title} />
      <meta name="twitter:description" content={metas.description} />
    </Helmet>
  );
};

// export default MetaTag;
