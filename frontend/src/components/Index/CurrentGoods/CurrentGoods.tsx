import { useState, memo } from 'react';
import useSWR, { SWRConfig } from 'swr';

import { getAllHotelList, getNearHotelList } from 'src/utils/requests';
import { StyledH3, StyledDiv } from './CurrentGoods.style';
import MoveCarousel from 'components/Carousels/MoveCarousel';
import NoMoveCarousel from 'components/Carousels/NoMoveCarousel';
import Spinner from 'components/Spinner/Spinner';

const CurrentGoods = () => {
  const [agreeInfo, setAgreeInfo] = useState<boolean>(false);
  const { data } = useSWR('/api/around', fetcher, { revalidateIfStale: false });

  function fetcher(): Promise<[]> {
    return new Promise((resolve, reject) => {
      const success = ({ coords }) => {
        setAgreeInfo(true);
        resolve(getNearHotelList(coords));
      };

      const rejected = () => {
        resolve(getAllHotelList());
      };

      navigator.geolocation.getCurrentPosition(success, rejected);
    });
  }

  return (
    <SWRConfig value={{ provider: cache => cache }}>
      <StyledDiv>
        <StyledH3>{agreeInfo ? '현재 지역에서의 추천 상품' : '전체 지역의 추천 상품'}</StyledH3>
        {!data ? (
          <Spinner />
        ) : data.length > 5 ? (
          <MoveCarousel resHotels={data} />
        ) : (
          <NoMoveCarousel resHotels={data} />
        )}
      </StyledDiv>
    </SWRConfig>
  );
};

export default memo(CurrentGoods);
