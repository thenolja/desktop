import UserInfoContainer from './UserInfo.style';

const UserInfo = () => (
  <UserInfoContainer>
    <h2 className="srOnly">마이페이지</h2>
    <form>
      <button>수정</button>
      <img src="/src/assets/user.svg" alt="프로필사진" />
      <fieldset>
        <legend>
          <strong>더블린아침햇살</strong>님의 프로필
        </legend>
        <div>
          <span>이메일</span>
          <span>soyo_0131@naver.com</span>
        </div>
        <div>
          <span>전화번호</span>
          <span>010-1234-5678</span>
        </div>
      </fieldset>
    </form>
  </UserInfoContainer>
);

export default UserInfo;
