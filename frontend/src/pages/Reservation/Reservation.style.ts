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

  button {
    width: 100%;
    height: 45px;
    background-color: #de2e5f;
    color: #fff;
    margin-bottom: 10px;
  }

  .agreeSection {
    font-size: 14px;

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
    font-size: 12px;
    line-height: 17px;
    // padding: 5px;

    h5 {
      color: #e67000;
      font-weight: 700;

      i {
        margin-right: 5px;
      }
      p {
        margin-bottom: 5px;
      }
    }
  }
`;

export const FormArticle = styled.article`
  display: flex;
  flex-direction: column;
  padding: 0px 20px 12px;
  border: 1px solid #ffffff;
  border-bottom-color: #f2f2f2;
  margin: 10px 0px;
`;

export const SectionTitle = styled.h3`
  color: #1a1a1a;
  font-size: 18px;
  padding: 10px 0px;
  font-weight: 700;
`;

export const Guidance = styled.div`
  background-color: #f2f2f2;
  border-radius: 4px;
  font-size: 12px;
  line-height: 15.96px;
  padding: 10px;
  margin-bottom: 10px;
`;

export const Necessary = styled.span`
  color: #de2e5f;
`;

export const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #ffffff;
  border-bottom-color: #4d4c4c;
  padding: 8px 0px;
  line-height: 21px;
`;

export const TotalWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0px;

  span:second-child {
    font-weight: 700;
  }
`;
