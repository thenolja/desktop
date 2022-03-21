import styled from 'styled-components';

const DatePickerContainer = styled.section`
  position: absolute;
  display: flex;

  top: 0;
  right: 0;
  border: 1px solid gray;
  border-radius: 30px;
  width: 700px;
  .react-datepicker-wrapper {
    width: 50%;
  }
  input {
    text-align: center;
    font-size: 24px;
    font-weight: 700;
    padding: 15px;
    cursor: pointer;
  }

  span {
    margin: 0;
    text-align: center;
    align-self: center;
  }
`;

export default DatePickerContainer;
