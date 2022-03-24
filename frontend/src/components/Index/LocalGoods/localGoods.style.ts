import styled from 'styled-components';
import { ulProps } from './LocalGoods.type';

const StyledH3 = styled.h3`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 24px;
`;

const StyledDiv = styled.div`
  margin-bottom: 72px;
`;

const StyledUl = styled.ul<ulProps>`
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

export { StyledH3, StyledDiv, StyledUl, StyledLi };
