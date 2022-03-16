import { Route, Routes } from 'react-router-dom';

import Header from 'components/header/Header';
import Main from 'components/main/Main';
import MyPage from 'src/pages/MyPage/MyPage';
import Footer from 'components/footer/Footer';

const App = () => {
  return (
    <>
      <Header />
      <Main>
        <Routes>
          <Route path="/MyPage" element={<MyPage />} />
        </Routes>
      </Main>
      <Footer />
    </>
  );
};

export default App;
