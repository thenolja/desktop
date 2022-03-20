import styled from 'styled-components';

const ReservationList = styled.section`
  position: relative;
  h2 {
    padding-bottom: 50px;
    margin-bottom: 50px;
    border-bottom: 1px solid black;
    font-size: 40px;
    font-weight: 700;
    letter-spacing: -3px;
  }

  .DatePickerContainer {
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
  }

  ul {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 50px 0;
  }
  li {
    display: flex;
    width: 800px;
    height: 100%;
    margin-right: 10px;
  }
  img {
    width: 400px;

    object-fit: cover;
  }
  div {
    display: flex;
    flex-grow: 1;
    flex-direction: column;
  }

  span {
    margin-left: 20px;
    margin-bottom: 20px;
    flex-grow: 1;
  }
  span:nth-of-type(1) {
    font-size: 28px;
  }
  span:nth-of-type(2) {
    color: gray;
  }
  span:not(span:nth-child(1)) {
    font-size: 20px;
  }
  span:nth-of-type(2n + 1) {
    font-weight: 700;
  }

  button {
    align-self: flex-end;
    flex-grow: 1;
    border-radius: 10px;
    font-size: 18px;
    text-align: center;
    line-height: 35px;
    color: #ffffff;
    background-color: #de2e5f;
    cursor: pointer;
  }
`;

export default ReservationList;
