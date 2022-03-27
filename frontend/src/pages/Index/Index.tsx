import Notice from 'src/components/Index/Notice/Notice';
import SearchForm from 'src/components/Index/SearchForm/SearchForm';
import CurrentGoods from 'src/components/Index/CurrentGoods/CurrentGoods';
import LocalGoods from 'src/components/Index/LocalGoods/LocalGoods';

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
