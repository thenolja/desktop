import styled from 'styled-components';

const StyledDiv = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
`;

const StyledDivInner = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  
  ul{
    display: flex;
    width: 100%;
    flex-grow: 1;
    flex-shrink: 0;

    li {
      min-width: 200px;
      width: 20%;
      flex-shrink: 0;
      padding: 0 25px;
  
      img {
        border-radius: 10px;
        height: auto;
        margin-bottom: 10px;
      }
    }
  }
`;

export { StyledDiv, StyledDivInner };
