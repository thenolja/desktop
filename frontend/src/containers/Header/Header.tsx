import netlifyIdentity from 'netlify-identity-widget';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { authLogIn, authLogOut, selectAuth } from 'src/contexts/auth';
import { useAppSelector } from 'src/contexts/state.type';
import { getUserById, createUser } from 'src/utils/users';
import { StyledHeader } from './Header.style';

const Header = () => {
  const dispatch = useDispatch();
  const { id, nickname, email } = useAppSelector(selectAuth);

  const login = () => {
    netlifyIdentity.open('login');
  };

  const logout = () => {
    netlifyIdentity.logout();
  };

  netlifyIdentity.on('login', async ({ id, email, user_metadata: { full_name: nickname } }) => {
    const user = await getUserById(id);
    let authorizedUser = {};

    const iscreatedUser = user?.length;

    authorizedUser = {
      id: iscreatedUser ? user.id : id,
      nickname: iscreatedUser ? user.nickname : nickname,
      email: iscreatedUser ? user.email : email,
      phone: iscreatedUser ? user.phone : '',
      reservations: iscreatedUser ? user.reservations : [],
      myReviews: iscreatedUser ? user.myReviews : [],
    };

    dispatch(authLogIn({ ...authorizedUser }));
    netlifyIdentity.close();
  });

  netlifyIdentity.on('logout', () => {
    dispatch(authLogOut());
  });

  useEffect(() => {
    netlifyIdentity.init();
  }, []);

  return (
    <StyledHeader>
      <Link to="/">
        <h1>
          <img src="/src/img/AnyConv.com__logo.webp" />
        </h1>
      </Link>

      {!nickname && !email && !id ? (
        <button onClick={login}>로그인</button>
      ) : (
        <>
          <div>
            <button onClick={logout}>로그아웃</button>
            <Link to="/mypage">마이페이지</Link>
          </div>
        </>
      )}
    </StyledHeader>
  );
};

export default Header;
