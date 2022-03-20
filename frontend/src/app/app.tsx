import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from 'src/containers/Header/Header';
import Main from 'src/containers/Main/Main';
import MyPage from 'src/pages/MyPage/MyPage';
import Footer from 'src/containers/Footer/Footer';
import Index from 'components/Index/Index';
import Detail from 'src/pages/Detail/Detail';
import Rooms from 'src/pages/Detail/Rooms';
import TopReviews from 'src/pages/Detail/TopReviews';
import Reviews from 'src/pages/Reviews/Reviews';

const App = () => {
  const [detailNavigation] = useState([
    { id: 'rooms', href: '', content: '객실' },
    { id: 'test', href: 'test', content: '편의시설' },
    { id: 'topReviews', href: 'topReviews', content: '후기' },
  ]);

  return (
    <>
      <Header />
      <Main>
        <Routes>
          <Route index element={<Index />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/detail" element={<Detail list={detailNavigation}/>}>
            <Route index element={<Rooms />} />
            <Route path="topReviews" element={<TopReviews />} />
          </Route>
        </Routes>
      </Main>
      <Footer />
    </>
  );
};

export default App;
