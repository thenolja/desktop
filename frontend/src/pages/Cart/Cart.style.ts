import styled from 'styled-components';
import { Selected } from '../../components/Room/Selector/Selector.style';

export const InputStyled = styled.div`
  input[type='checkbox'] {
    display: none;
  }
  input[type='checkbox'] + label {
    height: 30px;
    display: inline-block;
    cursor: pointer;
    padding-left: 30px;
    line-height: 24px;
    background-repeat: no-repeat;
    background-image: url('https://platform-site.yanolja.com/icons/checkbox-unselected.svg?inline');
  }

  input[type='checkbox']:checked + label {
    background-image: url('https://platform-site.yanolja.com/icons/checkbox-selected.svg?inline');
  }
`;

export const WrapperInput = styled(InputStyled)`
  border: 1px solid #e6e6e6;
  padding: 25px;
  display: flex;
  justify-content: space-between;

  button {
    cursor: pointer;
  }
`;

export const SelectedPrice = styled(Selected)`
  width: 60%;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
`;

export const SelectedItem = styled(InputStyled)`
  position: relative;

  button {
    position: absolute;
    right: 3%;
    top: 60%;
  }

  .chcekForm {
    position: absolute;
    left: 3%;
    top: 49%;
    z-index: 1;
  }
`;

export const EmptyWapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 12% auto;

  div {
    text-align: center;
    justify-content: center;
    align-items: center;
  }

  p {
    padding: 10px;
    text-align: center;
    font-size: 30px;
    font-weight: 700;
  }
`;
