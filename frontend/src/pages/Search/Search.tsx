import QueryString from 'qs';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import Spinner from 'components/Spinner/Spinner';
import SearchForm from 'components/Index/SearchForm/SearchForm';
import { getSearchHotelsByQuery } from 'src/utils/requests';
import { StyledDiv, StyledUl } from './Search.style';
import SearchLi from './SearchList/SearchLi';
import { hotelTypes } from './Search.type';

const Search = () => {
  const location = useLocation();
  const [searchedHotels, setSearchedHotels] = useState<[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const queryData = QueryString.parse(location.search, { ignoreQueryPrefix: true });

  useEffect(() => {
    const requestSearch = async () => {
      const res = await getSearchHotelsByQuery(queryData);
      console.log(res);

      setIsLoading(false);
      setSearchedHotels(res ?? []);
    };
    setIsLoading(true);
    requestSearch();
  }, [location.search]);

  return (
    <div>
      <SearchForm
        propQuery={queryData.query}
        propStartDate={new Date(queryData.checkIn)}
        propEndDate={new Date(queryData.checkOut)}
      />
      {isLoading ? (
        <Spinner />
      ) : searchedHotels.length === 0 ? (
        <StyledDiv>검색 결과가 없습니다.</StyledDiv>
      ) : (
        <StyledUl>
          {searchedHotels.map((hotel: hotelTypes) => (
            <SearchLi key={hotel.id} hotel={hotel} />
          ))}
        </StyledUl>
      )}
    </div>
  );
};

export default Search;
