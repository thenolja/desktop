import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import HotelIntro from './HotelIntro';
import axios from 'axios';
import { Nav, NavUl, NavList, ActiveNavList } from './Detail.style';
import { NavLink } from 'react-router-dom';
import { useLocation, useParams } from 'react-router-dom';

const Detail = ({ list }) => {
  const { pathname } = useLocation();
  const { id } = useParams();

  const [hotelId, setHotelId] = useState(id);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get('/api/detail')
      .then(res => {
        setUsers([...res.data]);
      })
      .catch(e => console.log(e));
  }, []);

  return (
    <>
      <HotelIntro></HotelIntro>
      <Nav>
        <NavUl>
          {list.map(({ id, href, content }) =>
            pathname.includes(id) || (pathname === `/detail/${hotelId}` && id === 'rooms') ? (
              <ActiveNavList key={id}>
                <NavLink to={href}>{content}</NavLink>
              </ActiveNavList>
            ) : (
              <NavList key={id}>
                <NavLink to={href}>{content}</NavLink>
              </NavList>
            ),
          )}
        </NavUl>
      </Nav>
      <Outlet />
    </>
  );
};

export default Detail;
