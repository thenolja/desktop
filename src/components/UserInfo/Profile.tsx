import { ProfileContainer } from './Profile.style';
import UserInfo from './UserInfo';
import UserInfoForm from './UserInfoForm';

const Profile = ({ isEditing, setEditingMode, user }) => {
  return (
    <ProfileContainer>
      <h2 className="srOnly">마이페이지</h2>
      <button onClick={() => setEditingMode(!isEditing)}>{isEditing ? '확인' : '수정'}</button>
      <img src="/src/assets/user.svg" alt="프로필사진" />
      {isEditing ? <UserInfoForm user={user} /> : <UserInfo user={user} />}
    </ProfileContainer>
  );
};

export default Profile;
