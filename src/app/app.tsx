import { Route, Routes } from 'react-router-dom';

import Header from 'components/header/Header';
import Main from 'components/main/Main';
import MyPage from 'components/myPage/MyPage';
import Footer from 'components/footer/Footer';

const App = () => {
<<<<<<< HEAD
  const Div = styled.div`
    color: #333;
  `;

=======
  
>>>>>>> 8e1c0ece4bfbedd8c738a8964518143217581358
  return (
    <>
      <Header />
      <Main>
        <Routes>
          <Route path="/myPage" element={<MyPage />} />
        </Routes>
      </Main>
      <Footer />
    </>
  );
};

export default App;
