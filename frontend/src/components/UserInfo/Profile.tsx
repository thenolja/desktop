import { useMemo } from 'react';
import { ProfileContainer } from './Profile.style';
import { ProfileEditor } from './User.type';
import UserInfo from './UserInfo';
import UserInfoForm from './UserInfoForm';

const Profile = ({ isEditing, setEditingMode }: ProfileEditor) => {
  const memoizedTitle = useMemo(
    () => (
      <>
        <h2 className="srOnly">마이페이지</h2>
        <img src="/src/assets/user.svg" alt="유저 아이콘" />
      </>
    ),
    [],
  );
  return (
    <ProfileContainer>
      {memoizedTitle}
      {isEditing ? <UserInfoForm setEditingMode={setEditingMode} /> : <UserInfo setEditingMode={setEditingMode} />}
    </ProfileContainer>
  );
};

export default Profile;
