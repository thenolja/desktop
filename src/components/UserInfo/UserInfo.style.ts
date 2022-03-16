import styled from 'styled-components';

const UserInfoContainer = styled.section`
  position: relative;
  background-color: #f9f7f7;
  width: 1000px;
  border-radius: 30px;
  padding: 60px 100px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 100px;

  img {
    width: 170px;
  }

  button {
    width: 90px;
    height: 35px;
    padding: 0;
    color: #ffffff;
    border-radius: 30px;
    font-weight: 600;
    font-size: 18px;
    background-color: #de2e5f;
    cursor: pointer;
    position: absolute;
    top: 20px;
    right: 20px;
  }
  form {
    display: flex;
    justify-content: space-around;
  }
  fieldset {
    legend {
      font-size: 40px;
      color: black;
      letter-spacing: -3px;
    }
    strong {
      font-weight: 700;
    }
    div > span {
      font-weight: 700;
      font-size: 18px;

      &:nth-child(1) {
        display: inline-block;
        width: 110px;
        height: 35px;
        margin-top: 35px;
        margin-right: 30px;
        border-radius: 10px;
        text-align: center;
        line-height: 35px;
        color: #ffffff;
        background-color: #de2e5f;
      }
      &:nth-child(2) {
      }
    }
  }
`;

export default UserInfoContainer;
