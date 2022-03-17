import { UserInfoFormContainer } from './Profile.style';

const UserInfoForm = () => {
  return (
    <UserInfoFormContainer>
      <fieldset>
        <legend>
          <strong>더블린아침햇살</strong>님의 프로필
        </legend>
        <div>
          <span>이메일</span>
          <span>soyo_0131@naver.com</span>
        </div>
        <div>
          <span>닉네임</span>
          <span>더블린아침햇살</span>
        </div>
        <div>
          <span>전화번호</span>
          <span>010-1234-5678</span>
        </div>
      </fieldset>
    </UserInfoFormContainer>
  );
};
export default UserInfoForm;
