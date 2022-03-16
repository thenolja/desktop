import styled from 'styled-components';

const StyledDl = styled.dl`
  display: flex;
  justify-content: center;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px 80px;
  }

  dt {
    display: flex;
    align-items: center;
    font-weight: 700;
    margin-right: 20px;
  }

  img {
    width: 20px;
  }

  button,
  a {
    font-size: 18px;
    cursor: pointer;
    padding: 7px;
    margin-left: 10px;
    font-weight: 700;
  }
`;

export { StyledDl };
