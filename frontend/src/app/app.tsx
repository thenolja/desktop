import { useState } from 'react';
import { useAppSelector } from 'src/contexts/state.type';
import { selectAuth } from 'src/contexts/auth';
import { Route, Routes } from 'react-router-dom';
import loadable from '@loadable/component';

import Header from 'src/containers/Header/Header';
import Main from 'src/containers/Main/Main';
import MyPage from 'src/pages/MyPage/MyPage';
import Footer from 'src/containers/Footer/Footer';
// import Index from 'src/pages/Index/Index';
// import Detail from 'src/pages/Detail/Detail';
// import Rooms from 'src/pages/Detail/Rooms';
// import TopReviews from 'src/pages/Detail/TopReviews';
// import Reviews from 'src/pages/Reviews/Reviews';
// import ProtectedRoute from 'src/pages/ProtectedRouter/ProtectedRouter';
// import Search from 'src/pages/Search/Search';
// import Amenity from 'components/Amenity/Amenity';
// import Reservation from 'src/pages/Reservation/Reservation';

const Index = loadable(() => import('src/pages/Index/Index'));
const Detail = loadable(() => import('src/pages/Detail/Detail'));
const Rooms = loadable(() => import('src/pages/Detail/Rooms'));
const TopReviews = loadable(() => import('src/pages/Detail/TopReviews'));
const Reviews = loadable(() => import('src/pages/Reviews/Reviews'));
const ProtectedRoute = loadable(() => import('src/pages/ProtectedRouter/ProtectedRouter'));
const Search = loadable(() => import('src/pages/Search/Search'));
const Amenity = loadable(() => import('components/Amenity/Amenity'));
const Reservation = loadable(() => import('src/pages/Reservation/Reservation'));

const App = () => {
  const { id, nickname, email } = useAppSelector(selectAuth);

  const [detailNavigation] = useState([
    { id: 'rooms', href: '', content: '객실' },
    { id: 'amenities', href: 'amenities', content: '편의시설' },
    { id: 'topReviews', href: 'topReviews', content: '후기' },
  ]);

  return (
    <>
      <Header />
      <Main>
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
          <Route path="/detail/:id" element={<Detail list={detailNavigation} />}>
            <Route index element={<Rooms />} />
            <Route path="amenities" element={<Amenity />} />
            <Route path="topReviews" element={<TopReviews />} />
          </Route>
          <Route path="/reviews/:id" element={<Reviews />} />
          <Route path="/reservation" element={<Reservation />} />
        </Routes>
      </Main>
      <Footer />
    </>
  );
};

export default App;
