import styled from 'styled-components';

const StyledDiv = styled.div`
  display: flex;
  flex-grow: ${props => +props.flexGrow || 1};
  align-items: center;
  padding: 5px;

  img {
    width: 30px;
    height: 30px;
    margin-right: 10px;
  }

  input {
    width: calc(100% - 42px);
  }

  input::placeholder {
    color: #000;
  }
`;

export { StyledDiv };
