import { StyledDiv } from './InputDiv.style';

const PersoInput = () => {
  return (
    <StyledDiv width="267px">
      <img src="/src/assets/person.png" alt="" />
      <input id="person" placeholder="인원 수" />
    </StyledDiv>
  );
};

export default PersoInput;
