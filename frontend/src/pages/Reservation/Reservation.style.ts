import styled from 'styled-components';

export const ReservationWrapper = styled.div`
  padding: 10px;
  section {
    margin-bottom: 30px;
  }

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

  input[type='radio'] {
    width: 24px;
    height: 24px;
    cursor: pointer;
    position: relative;
    top: 4px;
    line-height: 30px;
  }
  
  input[type='radio'] + label {
    height: 30px;
    line-height: 30px;
    cursor: pointer;
    padding-left: 10px;
  }

  button {
    width: 100%;
    height: 45px;
    background-color: #de2e5f;
    color: #fff;
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 20px;
  }
  button:disabled {
    width: 100%;
    height: 45px;
    background-color: #919191;
    color: #fff;
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 20px;
    cursor: not-allowed;
  }

  .agreeSection {
    font-size: 16px;

    input[type='checkbox'] + label {
      background-image: url('https://platform-site.yanolja.com/icons/checkbox-blue-line-unselected.svg?inline');
    }
    input[type='checkbox']:checked + label {
      background-image: url('https://platform-site.yanolja.com/icons/checkbox-blue-line-selected.svg?inline');
    }
  }

  .notice {
    background-color: #fef8f2;
    border-radius: 4px;
    color: #1a1a1a;
    font-size: 15px;
    line-height: 22px;
    padding: 10px 10px;

    h4 {
      color: #2020df;
      font-weight: 700;
      line-height: 20px;

      i {
        margin-right: 5px;
      }
      p {
        margin-bottom: 5px;
      }
    }
    p{
      font-size: 15px;
    }
  }
`;