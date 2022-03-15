import styled from 'styled-components';

import Header from 'components/header/Header';
import Footer from 'components/footer/Footer';

const App = () => {
  const Div = styled.div`
    background: #000;
    color: #fff;
  `;
  return (
    <Div>
      <Header />
      <Footer />
    </Div>
  );
};

export default App;
