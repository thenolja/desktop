import netlifyIdentity from 'netlify-identity-widget';
import { useEffect, memo } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

import { authLogIn, authLogOut, selectAuth } from 'src/contexts/auth';
import { useAppSelector } from 'src/contexts/state.type';
import { createUser } from 'src/utils/users';
import { StyledHeader } from './Header.style';

const Header = () => {
  const dispatch = useDispatch();
  const { id, nickname, email } = useAppSelector(selectAuth);

  const { pathname } = useLocation();

  const login = () => {
    netlifyIdentity.open('login');
  };

  const logout = () => {
    netlifyIdentity.logout();
  };

  netlifyIdentity.on('login', async ({ id, email, user_metadata: { full_name: nickname } }) => {
    let authorizedUser = {};
    let storedUser = { id: null, nickname: null, email: null, phone: null, reservation: null, myReviews: null };
    if (sessionStorage.getItem('persist:root')) {
      const { auth } = JSON.parse(sessionStorage.getItem('persist:root'));
      storedUser = JSON.parse(auth);
    }

    const user = await createUser({ id, email, nickname });

    authorizedUser = {
      id: storedUser.id ? storedUser.id : user.id,
      nickname: storedUser.nickname ? storedUser.nickname : user.nickname,
      email: storedUser.email ? storedUser.email : user.email,
      phone: storedUser.phone ? storedUser.phone : user.phone,
      reservations: storedUser.reservation ? storedUser.reservation : user.reservation,
      myReviews: storedUser.myReviews ? storedUser.myReviews : user.myReviews,
    };

    dispatch(authLogIn({ ...authorizedUser }));
    netlifyIdentity.close();
  });

  netlifyIdentity.on('logout', () => {
    dispatch(authLogOut());
    sessionStorage.clear();
  });

  useEffect(() => {
    netlifyIdentity.init();
  }, []);

  return (
    <StyledHeader>
      <Link to="/">
        <h1>
          <img src="/src/img/AnyConv.com__logo.webp" alt="더놀자" />
        </h1>
      </Link>

      {!nickname && !email && !id ?
        <button onClick={login}>로그인</button>
        :
        pathname.includes('reservation') ?
          null
          :
          <div>
            <button onClick={logout}>로그아웃</button>
            <Link to="/mypage">마이페이지</Link>
          </div>
      }
    </StyledHeader>
  );
};

export default memo(Header);
