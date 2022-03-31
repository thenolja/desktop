import styled from 'styled-components';

const StyledLi = styled.li`
  h4 {
    min-height: 32px;
    font-size: 16px;
    font-weight: 700;
  }

  span {
    font-size: 14px;
  }

  .star-img {
    display: inline-block;
    width: auto;
    margin-bottom: 0;
    vertical-align: inherit;
    margin-right: 5px;
  }

  .price-wrapper {
    text-align: right;

    span {
      color: #333;
    }
  }
`;

export { StyledLi };
