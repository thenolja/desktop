import QueryString from 'qs';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import Spinner from 'components/Spinner/Spinner';
import SearchForm from 'components/Index/SearchForm/SearchForm';
import { getSearchHotelsByQuery } from 'src/utils/requests';
import { StyledDiv, StyledUl } from './Search.style';
import SearchLi from '../../components/SearchList/SearchLi';
import { hotelTypes } from './Search.type';
import { SEOMetaTag, MetaTagDefaults, MetaTag } from 'components/SeoMetaTag/SEOMetaTag';

const Search = () => {
  const location = useLocation();
  const [searchedHotels, setSearchedHotels] = useState<[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [metaTag, setMetaTag] = useState<MetaTag>(MetaTagDefaults);
  const queryData = QueryString.parse(location.search, { ignoreQueryPrefix: true });

  useEffect(() => {
    const requestSearch = async () => {
      const res = await getSearchHotelsByQuery(queryData);

      setIsLoading(false);
      setSearchedHotels(res ?? []);
      setMetaTag({
        title: queryData.query + ' 검색결과 | thenolja',
        description:
          queryData.query +
          ' 검색결과 야놀자에서는 모텔, 호텔, 리조트, 펜션, 게스트하우스까지 다양한 숙박업소를 실시간으로 최저가 조회가 가능합니다. 사진 및 가격확인 후 온라인 할인예약',
        keywords: '더놀자,주변 모텔, 주변 호텔,호텔 추천,빈방 찾기',
      });
    };
    setIsLoading(true);
    requestSearch();
  }, [location.search]);

  return (
    <div>
      <SearchForm
        propQuery={queryData.query}
        propDestinationId={queryData.destinationId}
        propStartDate={new Date(queryData.checkIn)}
        propEndDate={new Date(queryData.checkOut)}
      />
      {isLoading ? (
        <Spinner />
      ) : searchedHotels.length === 0 ? (
        <StyledDiv>검색 결과가 없습니다.</StyledDiv>
      ) : (
        <StyledUl>
          <SEOMetaTag metas={metaTag} />
          {searchedHotels.map((hotel: hotelTypes) => (
            <SearchLi key={hotel.id} hotel={hotel} queryData={queryData} />
          ))}
        </StyledUl>
      )}
    </div>
  );
};

export default Search;
