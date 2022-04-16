import styled from 'styled-components';
import { InputStyled } from './Cart.style';

export const FormArticle = styled(InputStyled)`
  border: 2px solid #ccc;
  display: flex;
  flex-direction: column;
  padding-bottom: 12px;
  margin: 20px 0px;

  p {
    font-size: 14px;
  }
`;

export const Wrapper = styled.div`
  padding: 20px;
`;

export const SelectedTitle = styled.div`
  display: block;
  margin-left: 15px;
  margin-bottom: 20px;
`;

export const SelectedImg = styled.div`
  position: relative;
  border-top: solid 1px #e6e6e6;
  padding-top: 20px;
  display: flex;
  flex-direction: row;
  margin-left: 15px;
  flex: 1 1 auto;

  button {
    position: absolute;
    right: 0;
  }
`;

export const SelectedInfo = styled.div`
  padding-left: 20px;

  p:first-child {
    font-size: 20px;
    font-weight: 700;
  }
  p {
    font-size: 16px;
    line-height: 27px;
    margin-top: 8px;
  }
`;
