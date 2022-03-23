import QueryString from 'qs';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { getSearchHotelsByQuery } from 'src/utils/requests';
import SearchForm from 'components/Index/SearchForm/SearchForm';
import { StyledDiv, StyledUl } from './Search.style';
import SearchLi from './SearchLi';
import { hotelTypes } from './Search.type';
import Spinner from 'components/Spinner/Spinner';

const Search = () => {
  const location = useLocation();
  const [searchedHotels, setSearchedHotels] = useState<[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const queryData = QueryString.parse(location.search, { ignoreQueryPrefix: true });

  useEffect(() => {
    const requestSearch = async () => {
      const res = await getSearchHotelsByQuery(queryData);
      setIsLoading(false);
      setSearchedHotels(res);
    };
    setIsLoading(true);
    requestSearch();
  }, [location.search]);

  return (
    <div>
      <SearchForm />
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
