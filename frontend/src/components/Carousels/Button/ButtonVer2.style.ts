import styled from 'styled-components';

const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  right: ${props => props.role === 'next' && '-40px'};
  left: ${props => props.role === 'prev' && '-60px'};
  transform: translateY(-50%);
  width: 40px;
  background-color: transparent;
  cursor: pointer;
  z-index: 10;
`;

export { ArrowButton };
