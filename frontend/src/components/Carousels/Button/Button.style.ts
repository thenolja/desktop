import styled from 'styled-components';

const StyledButton = styled.button`
  position: absolute;
  top: 50%;
  right: ${props => props.role === 'next' && '0px'};
  transform: translateY(-50%);
  width: 30px;
  background: #fff;
  border: 1px solid #c4c4c4;
  cursor: pointer;
  z-index: 10;
`;

export { StyledButton };
