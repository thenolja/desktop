import styled from 'styled-components';

const ProfileContainer = styled.section`
  position: relative;
  background-color: #f9f7f7;
  width: 1000px;
  border-radius: 30px;
  padding: 60px 80px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 100px;

  img {
    float: left;
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
  strong {
    font-weight: 700;
  }
`;

const UserInfoFormContainer = styled.form`
  margin-left: auto;
  width: 600px;
  fieldset {
    legend {
      font-size: 40px;
      color: black;
      letter-spacing: -3px;
    }

    label,
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
    }

    #nickname,
    #phone {
      background-color: #f0f0f0;
      border-radius: 10px;
      padding: 5px;
      font-size: 18px;
    }
  }
`;

export { ProfileContainer, UserInfoFormContainer };
