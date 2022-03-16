import { StyledForm } from './SearchForm.style';
import DateInput from './input/DateInput';
import PersoInput from './input/PersoInput';
import QueryInput from './input/QueryInput';
import Button from './buttoon/Button';

const SearchForm = () => {
  return (
    <StyledForm>
      <QueryInput />
      <DateInput />
      <DateInput />
      <PersoInput />
      <Button />
    </StyledForm>
  );
};

export default SearchForm;
