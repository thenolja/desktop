import netlifyIdentity from 'netlify-identity-widget';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { authLogIn, authLogOut } from 'src/contexts/auth';

const Header = () => {
  const dispatch = useDispatch();

  const login = () => {
    netlifyIdentity.open('login');
  };

  const logout = () => {
    netlifyIdentity.logout();
  };

  netlifyIdentity.on('login', user => {
    dispatch(authLogIn({ currentUser: 'me' }));
    netlifyIdentity.close();
  });

  netlifyIdentity.on('logout', () => {
    dispatch(authLogOut());
  });

  useEffect(() => {
    netlifyIdentity.init();
  }, []);

  return (
    <header>
      <h1>더 놀자</h1>
      <button onClick={login}>로그인</button>
      <button onClick={logout}>로그 아웃</button>
      {/* <button onClick={showMyPage}>마이 페이지</button> */}
    </header>
  );
};

export default Header;
