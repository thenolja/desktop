import styled from 'styled-components';
import { Route, Routes } from 'react-router-dom';

import Header from 'components/header/Header';
import MyPage from 'components/myPage/MyPage';
import Footer from 'components/footer/Footer';

const App = () => {
  const Div = styled.div`
    color: #333;
  `;

  return (
    <Div>
      <Header />
      <Routes>
        <Route path="/myPage" element={<MyPage />} />
      </Routes>
      <Footer />
    </Div>
  );
};

export default App;
