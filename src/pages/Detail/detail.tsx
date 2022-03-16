import { Outlet } from 'react-router-dom';
import HotelDescription from 'components/detail/HotelDescription';

const Detail = ({ ...restProps }) => {
  return (
    <>
      <div {...restProps}>detail page</div>
      <HotelDescription></HotelDescription>
      {/* 내비게이션 추가 */}
      <Outlet />
    </>
  );
};

export default Detail;
