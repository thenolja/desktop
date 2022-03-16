import { StyledDiv } from './InputDiv.style';

const PersoInput = () => {
  return (
    <StyledDiv>
      <img src="/src/img/person.png" alt="" />
      <input id="person" placeholder="인원 수" />
    </StyledDiv>
  );
};

export default PersoInput;
