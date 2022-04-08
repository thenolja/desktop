import { useMemo } from 'react';
import { ProfileContainer } from './Profile.style';
import { ProfileEditor } from './User.type';
import UserInfoForm from './UserInfoForm';
import user from '/src/assets/user.svg';

const Profile = ({ isEditing, setEditingMode }: ProfileEditor) => {
  const memoizedTitle = useMemo(
    () => (
      <>
        <h2 className="srOnly">마이페이지</h2>
        <img src={user} alt="유저 아이콘" />
      </>
    ),
    [],
  );
  return (
    <ProfileContainer>
      {memoizedTitle}
      <UserInfoForm isEditing={isEditing} setEditingMode={setEditingMode} />
    </ProfileContainer>
  );
};

export default Profile;
