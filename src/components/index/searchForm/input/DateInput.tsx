import { StyledDiv } from './InputDiv.style';

const DateInput = () => {
  return (
    <StyledDiv width="174px">
      <img src="/src/img/calander.png" alt="" />
      <input id="data" placeholder="체크인 날짜" />
    </StyledDiv>
  );
};

export default DateInput;
