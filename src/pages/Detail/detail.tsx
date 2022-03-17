import { Outlet } from 'react-router-dom';
import HotelDescription from 'components/detail/HotelDescription';
import DetailNavbar from 'components/DetailNavbar/DetailNavbar';

const Detail = ({ ...restProps }) => {
  return (
    <>
      <div {...restProps}>detail page</div>
      <HotelDescription></HotelDescription>
      <DetailNavbar />
      <Outlet />
    </>
  );
};

export default Detail;
