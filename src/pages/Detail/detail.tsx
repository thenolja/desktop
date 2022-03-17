import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import DetailNavbar from 'components/DetailNavbar/DetailNavbar';
import HotelIntro from './HotelIntro';

const Detail = ({ ...restProps }) => {
  return (
    <>
      <div {...restProps}>detail page</div>
      <HotelIntro></HotelIntro>
      <DetailNavbar />
      <Outlet />
    </>
  );
};

export default Detail;
