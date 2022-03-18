import { StyledDiv } from './InputDiv.style';

const QueryInput = () => {
  return (
    <StyledDiv flexGrow={3}>
      <img src="/src/assets/location.png" alt="" />
      <input id="query" placeholder="지역, 지하철역, 숙소명으로 찾아보세요." />
    </StyledDiv>
  );
};

export default QueryInput;
