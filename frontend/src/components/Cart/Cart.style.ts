import styled from 'styled-components';

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
