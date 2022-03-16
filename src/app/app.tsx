import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from 'components/header/Header';
import Main from 'components/main/Main';
import MyPage from 'components/myPage/MyPage';
import Footer from 'components/footer/Footer';
import Index from 'components/index/Index';
import Detail from 'src/pages/Detail/detail';
import Rooms from 'src/pages/Detail/Rooms';

const App = () => {
  // const [detailNavigation] = useState([
  //   { id: 'rooms', content: '객실' },
  //   // 페이지 생성 후, 추가하기
  // ]);

  return (
    <>
      <Header />
      <Main>
        <Routes>
          <Route index element={<Index />} />
          <Route path="/myPage" element={<MyPage />} />
          <Route path="/detail" element={<Detail />}>
            <Route path="rooms" element={<Rooms />} />
          </Route>
        </Routes>
      </Main>
      <Footer />
    </>
  );
};

export default App;
