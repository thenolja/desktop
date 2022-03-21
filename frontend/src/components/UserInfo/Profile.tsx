import { ProfileContainer } from './Profile.style';
import UserInfo from './UserInfo';
import UserInfoForm from './UserInfoForm';
import { UserInfoType } from './User';

const Profile = ({ isEditing, handleEditingMode, user }: UserInfoType) => {
  return (
    <ProfileContainer>
      <h2 className="srOnly">마이페이지</h2>
      <img src="/src/assets/user.svg" alt="프로필사진" />
      {isEditing ? (
        <UserInfoForm isEditing user={user} handleEditingMode={handleEditingMode} />
      ) : (
        <UserInfo user={user} handleEditingMode={handleEditingMode} />
      )}
    </ProfileContainer>
  );
};

export default Profile;
