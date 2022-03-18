import { ProfileContainer } from './Profile.style';
import UserInfo from './UserInfo';
import UserInfoForm from './UserInfoForm';

const Profile = ({ isEditing, handleEditingMode, user }) => {
  return (
    <ProfileContainer>
      <h2 className="srOnly">마이페이지</h2>
      <img src="/src/assets/user.svg" alt="프로필사진" />
      {isEditing ? (
        <UserInfoForm user={user} handleEditingMode={handleEditingMode} />
      ) : (
        <UserInfo user={user} handleEditingMode={handleEditingMode} />
      )}
    </ProfileContainer>
  );
};

export default Profile;
