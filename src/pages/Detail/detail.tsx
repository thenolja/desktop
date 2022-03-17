import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import HotelIntro from './HotelIntro';

const Detail = ({ ...restProps }) => {
  return (
    <>
      <div {...restProps}>detail page</div>
      <HotelIntro></HotelIntro>
      {/* 내비게이션 추가 */}
      <Outlet />
    </>
  );
};

export default Detail;
