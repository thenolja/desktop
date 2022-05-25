import netlifyIdentity from 'netlify-identity-widget';
import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

import { authLogIn, authLogOut, AuthType, selectAuth } from 'src/contexts/auth';
import { setUserCart, CartType, selectCart } from 'src/contexts/shopping';
import { useAppSelector } from 'src/contexts/state.type';
import { createUser } from 'src/utils/users';
import { StyledHeader, CountDiv } from './Header.style';

const Header = () => {
  const dispatch = useDispatch();
  const { id, nickname, email } = useAppSelector(selectAuth) as AuthType;
  const totalCart = useAppSelector(selectCart) as CartType;
  const { pathname } = useLocation();

  const login = () => {
    netlifyIdentity.open('login');
  };

  const logout = () => {
    netlifyIdentity.logout();
  };

  netlifyIdentity.on('login', async ({ id, email, user_metadata: { full_name: nickname } }) => {
    let authorizedUser = {};
    let storedUser = { id: null, nickname: null, email: null, reservation: null, myReviews: null };
    if (sessionStorage.getItem('persist:root')) {
      const { auth } = JSON.parse(sessionStorage.getItem('persist:root'));
      storedUser = JSON.parse(auth);
    }

    const user = await createUser({ id, email, nickname });

    authorizedUser = {
      id: storedUser.id ? storedUser.id : user.id,
      nickname: storedUser.nickname ? storedUser.nickname : user.nickname,
      email: storedUser.email ? storedUser.email : user.email,
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

  useEffect(() => {
    const fetchUserInfo = async () => {
      const result = await axios.get(`/api/cart/${id}`);
      dispatch(setUserCart(result.data));
    };

    if (id) {
      fetchUserInfo();
    }
  }, [id]);

  return (
    <StyledHeader>
      <Link to="/">
        <h1>
          <img src="/src/img/AnyConv.com__logo.webp" alt="더놀자" />
        </h1>
      </Link>

      {!nickname && !email && !id ? (
        <button onClick={login}>로그인</button>
      ) : pathname.includes('reservation') ? null : (
        <div className="textWrapper">
          <button onClick={logout}>로그아웃</button>
          <Link to="/mypage">마이페이지</Link>
          <Link to="/cart">
            장바구니<CountDiv>{totalCart.length > 0 ? totalCart.length : 0}</CountDiv>
          </Link>
        </div>
      )}
    </StyledHeader>
  );
};

export default Header;
