import { Route, Routes } from 'react-router-dom';

import Header from 'components/header/Header';
import Main from 'components/main/Main';
import MyPage from 'components/myPage/MyPage';
import Footer from 'components/footer/Footer';
import Index from 'components/index/Index';

const App = () => {
  return (
    <>
      <Header />
      <Main>
        <Routes>
          <Route index element={<Index />} />
          <Route path="/myPage" element={<MyPage />} />
        </Routes>
      </Main>
      <Footer />
    </>
  );
};

export default App;
