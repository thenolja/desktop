import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

import DetailNavbar from 'components/DetailNavbar/DetailNavbar';
import HotelIntro from './HotelIntro';
import axios from 'axios';

const Detail = ({ ...restProps }) => {
  const [users, setUsers]=useState([]);
  useEffect(() => {
    axios.get('/api/detail')
    .then(res=>{
      setUsers([...res.data])
    }).catch(e=>console.log(e))
  }, []);

  return (
    <>
      <div {...restProps}>
      {/* {users.map((user)=>(
        <div key={user.id}>
          <div>{user.userId}</div>
          <div>{user.email}</div>
          <div>{user.nickName}</div>
          <div>{user.phone}</div>
        </div>
      )
      )} */}
      </div>
      <HotelIntro></HotelIntro>
      <DetailNavbar />
      <Outlet />
    </>
  );
};

export default Detail;
