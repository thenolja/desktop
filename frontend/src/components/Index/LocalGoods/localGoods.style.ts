import styled from 'styled-components';

const StyledH3 = styled.h3`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 24px;
`;

const StyledUl = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const StyledLi = styled.li`
  width: 25%;
  font-size: 16px;
  text-align: center;
  cursor: pointer;
  padding: 10px 0;
  border-right: 1px solid #ccc;
  &:last-child {
    border-right: 0;
  }
`;

export { StyledH3, StyledUl, StyledLi };
