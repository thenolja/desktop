import styled from 'styled-components';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 30px 5%;

  h1 {
    height: 50px;
  }

  button,
  a {
    font-size: 18px;
    cursor: pointer;
    padding: 10px;
    margin-left: 7px;
    font-weight: 700;
  }

  .textWrapper {
    position: relative;
  }
`;

const CountDiv = styled.div`
  position: absolute;
  top: 5px;
  right: -15px;
  width: 1.6rem;
  height: 1.6rem;
  background-color: #de2e5f;
  border-radius: 45%;
  text-align: center;
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.5rem;
  color: #fff;
`;

export { StyledHeader, CountDiv };
