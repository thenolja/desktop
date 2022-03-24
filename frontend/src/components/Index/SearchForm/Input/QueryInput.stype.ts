import styled from 'styled-components';

const StyledSelect = styled.select`
  position: relative;
  border: 0;
  width: 80%;
`;

const StyledUl = styled.ul`
  position: absolute;
  top: 68px;
  left: 0;
  z-index: 10;
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgb(0 0 0 / 20%);

  li {
    height: 30px;
    line-height: 30px;
    cursor: pointer;
    margin-bottom: 15px;

    &.selected-li {
      background-color: #f2f2f2;
      border-radius: 5px;

      .highlighted {
        color: #000;
      }
    }

    &:last-child {
      margin-bottom: 0;
    }

    .highlighted {
      background: #f5f5dc;
      padding: 0 2px;
      font-weight: 700;
    }
  }
`;

export { StyledSelect, StyledUl };
