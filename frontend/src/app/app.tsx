import { lazy, Suspense, useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';

import { useAppSelector } from 'src/contexts/state.type';
import Header from 'src/containers/Header/Header';
import Main from 'src/containers/Main/Main';
import Footer from 'src/containers/Footer/Footer';
import Spinner from 'components/Spinner/Spinner';
import { SEOMetaTag } from 'components/SeoMetaTag/SEOMetaTag';
import { NotFound } from 'src/pages/NotFound/NotFound';
import { AuthType, selectAuth } from 'src/contexts/auth';

const Index = lazy(() => import('src/pages/Index/Index'));
const Detail = lazy(() => import('src/pages/Detail/Detail'));
const Rooms = lazy(() => import('src/pages/Detail/Rooms'));
const TopReviews = lazy(() => import('src/pages/Detail/TopReviews'));
const Reviews = lazy(() => import('src/pages/Reviews/Reviews'));
const ProtectedRoute = lazy(() => import('src/pages/ProtectedRouter/ProtectedRouter'));
const Search = lazy(() => import('src/pages/Search/Search'));
const Amenity = lazy(() => import('components/Amenity/Amenity'));
const Reservation = lazy(() => import('src/pages/Reservation/Reservation'));
const MyPage = lazy(() => import('src/pages/MyPage/MyPage'));
const Cart = lazy(() => import('src/components/Cart/Cart'));

const App = () => {
  const { id, nickname, email } = useAppSelector(selectAuth) as AuthType;

  const MemoizedHeader = useMemo(() => {
    return (
      <>
        <Header />
      </>
    );
  }, [id]);

  const MemoizedFooter = useMemo(() => {
    return (
      <>
        <Footer />
      </>
    );
  }, []);

  const detailNavigation = useMemo(
    () => [
      { id: 'rooms', href: '', content: '객실' },
      { id: 'amenities', href: 'amenities', content: '편의시설' },
      { id: 'topReviews', href: 'topReviews', content: '후기' },
    ],
    [],
  );

  return (
    <>
      {MemoizedHeader}
      <Main>
        <SEOMetaTag />
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route index element={<Index />} />
            <Route path="/search" element={<Search />} />
            <Route
              path="/mypage"
              element={
                <ProtectedRoute isAllow={!!(id && nickname && email)}>
                  <MyPage />
                </ProtectedRoute>
              }
            />
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/detail/:id" element={<Detail list={detailNavigation} />}>
              <Route index element={<Rooms />} />
              <Route path="amenities" element={<Amenity />} />
              <Route path="topReviews" element={<TopReviews />} />
            </Route>
            <Route path="/reviews/:id" element={<Reviews />} />
            <Route
              path="/reservation/:id"
              element={
                <ProtectedRoute isAllow={!!(id && nickname && email)}>
                  <Reservation />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Main>
      {MemoizedFooter}
    </>
  );
};

export default App;
