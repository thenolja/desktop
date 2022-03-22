import { selectAuth } from 'src/contexts/auth';
import { useAppSelector } from 'src/contexts/state.type';
import { UserInfoContainer } from './Profile.style';

const UserInfo = ({ handleEditingMode }) => {
  const { id, nickname, email, phone } = useAppSelector(selectAuth);

  return (
    <UserInfoContainer>
      <h2>
        <strong>{nickname}</strong>님의 프로필
      </h2>
      <div>
        <div>
          <span>이메일</span>
          <span>{email}</span>
        </div>
        <div>
          <span>닉네임</span>
          <span>{nickname}</span>
        </div>
        <div>
          <span>전화번호</span>
          <span>{phone ?? '입력된 정보가 없습니다'}</span>
        </div>
      </div>
      <button className="submit" onClick={() => handleEditingMode(false)}>
        수정
      </button>
    </UserInfoContainer>
  );
};
export default UserInfo;
