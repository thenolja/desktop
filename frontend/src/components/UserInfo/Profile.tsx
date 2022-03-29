import { ProfileContainer } from './Profile.style';
import { ProfileEditor } from './User.type';
import UserInfo from './UserInfo';
import UserInfoForm from './UserInfoForm';

const Profile = ({ isEditing, setEditingMode }: ProfileEditor) => {
  return (
    <ProfileContainer>
      <h2 className="srOnly">마이페이지</h2>
      <img src="/src/assets/user.svg" alt="프로필사진" />
      {isEditing ? <UserInfoForm setEditingMode={setEditingMode} /> : <UserInfo setEditingMode={setEditingMode} />}
    </ProfileContainer>
  );
};

export default Profile;
