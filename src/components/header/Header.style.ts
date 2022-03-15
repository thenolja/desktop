import styled from 'styled-components';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 30px 5%;

  h1{
    height: 50px;
  }

  button, a{
    font-size: 18px;
    cursor: pointer;
    padding: 7px;
    margin-left: 10px;
    font-weight: 700;
  }
`;

export default StyledHeader;
