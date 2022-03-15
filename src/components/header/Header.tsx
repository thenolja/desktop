import netlifyIdentity from 'netlify-identity-widget';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { authLogIn, authLogOut, selectAuth } from 'src/contexts/auth';
import { useAppSelector } from 'src/contexts/state.type';
import StyledHeader from './Header.style';

const Header = () => {
  const dispatch = useDispatch();

  const { currentUser, email } = useAppSelector(selectAuth);

  const login = () => {
    netlifyIdentity.open('login');
  };

  const logout = () => {
    netlifyIdentity.logout();
  };

  netlifyIdentity.on('login', ({ email, user_metadata: { full_name: currentUser } }) => {
    dispatch(authLogIn({ currentUser, email }));
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
      <h1>
        <img src="/src/img/AnyConv.com__logo.webp" />
      </h1>
      {!currentUser && !email ? (
        <button onClick={login}>로그인</button>
      ) : (
        <>
          <div>
            <button onClick={logout}>로그 아웃</button>
            <Link to="/myPage">마이 페이지</Link>
          </div>
        </>
      )}
    </StyledHeader>
  );
};

export default Header;
