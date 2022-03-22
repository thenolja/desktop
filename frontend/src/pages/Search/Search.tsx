import QueryString from 'qs';
import { useEffect, useState } from 'react';

import { getSearchHotelsByQuery } from 'src/utils/requests';
import { StyledUl } from './Search.style';
import SearchLi from './SearchLi';

const Search = () => {
  const [searchedHotels, setSearchedHotels] = useState<[]>([]);
  const queryData = QueryString.parse(location.search, { ignoreQueryPrefix: true });

  useEffect(() => {
    const requestSearch = async () => {
      const res = await getSearchHotelsByQuery(queryData);
      console.log(res);

      setSearchedHotels(res);
    };
    requestSearch();
  }, []);

  return (
    <div>
      <StyledUl>
        {searchedHotels.map(hotel => (
          <SearchLi key={hotel.id} hotel={hotel} />
        ))}
      </StyledUl>
    </div>
  );
};

export default Search;
