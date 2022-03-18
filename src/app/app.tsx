import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from 'src/containers/Header/Header';
import Main from 'src/containers/Main/Main';
import MyPage from 'src/pages/MyPage/MyPage';
import Footer from 'src/containers/Footer/Footer';
import Index from 'components/Index/Index';
import Detail from 'src/pages/Detail/Detail';
import Rooms from 'src/pages/Detail/Rooms';
import Reviews from 'src/pages/Detail/Reviews';

const App = () => {
  // const [detailNavigation] = useState([
  //   { id: 'rooms', content: '객실' },
  //   { id: 'rooms', content: '객실' },
  //   { id: 'reviews', content: '후기' },
  //   // 페이지 생성 후, 추가하기
  // ]);

  return (
    <>
      <Header />
      <Main>
        <Routes>
          <Route index element={<Index />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/detail" element={<Detail />}>
            <Route index element={<Rooms />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Routes>
      </Main>
      <Footer />
    </>
  );
};

export default App;
