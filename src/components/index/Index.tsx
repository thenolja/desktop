import Notice from './Notice/Notice';
import SearchForm from './SearchForm/SearchForm';
import CurrentGoods from './CurrentGoods/CurrentGoods';
import LocalGoods from './LocalGoods/LocalGoods';

const Index = () => {
  return (
    <>
      <Notice />
      <SearchForm />
      <CurrentGoods />
      {/* <LocalGoods /> */}
    </>
  );
};

export default Index;
