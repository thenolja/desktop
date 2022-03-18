import { UserInfoContainer } from './Profile.style';

const UserInfo = ({ user, handleEditingMode }) => {
  return (
    <UserInfoContainer>
      <h2>
        <strong>{user.currentUser}</strong>님의 프로필
      </h2>
      <div>
        <div>
          <span>이메일</span>
          <span>{user.email}</span>
        </div>
        <div>
          <span>닉네임</span>
          <span>{user.currentUser}</span>
        </div>
        <div>
          <span>전화번호</span>
          <span>{user.phone ?? '입력된 정보가 없습니다'}</span>
        </div>
      </div>
      <button className="submit" onClick={() => handleEditingMode(false)}>
        수정
      </button>
    </UserInfoContainer>
  );
};
export default UserInfo;
