import { StyledForm } from './SearchForm.style';
import DateInput from './Input/DateInput';
import PersoInput from './Input/PersoInput';
import QueryInput from './Input/QueryInput';
import Button from './Buttoon/Button';

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
