import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

import HotelIntro from './HotelIntro';
import axios from 'axios';
import { Nav, NavUl, NavList, ActiveNavList } from './Detail.style';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Detail = ({ list, ...restProps }) => {
  const { pathname } = useLocation();

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
      {users.map((user)=>(
        <div key={user.id}>
          <div>{user.userId}</div>
          <div>{user.email}</div>
          <div>{user.nickName}</div>
          <div>{user.phone}</div>
        </div>
      )
      )}
      </div>
      <HotelIntro></HotelIntro>
      <Nav>
        <NavUl>
          {list.map(({id, href, content})=>(
            pathname.includes(id) || (pathname==='/detail' && id==='rooms')?
              <ActiveNavList key={id}>
                <NavLink to={href}>
                  {content}
                </NavLink>
              </ActiveNavList>
              :
              <NavList key={id}>
                <NavLink to={href}>
                  {content}
                </NavLink>
              </NavList>  
          ))}
        </NavUl>
      </Nav>
      <Outlet />
    </>
  );
};

export default Detail;
