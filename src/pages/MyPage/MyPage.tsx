import ReservationList from 'components/Reservation/Reservation';
import UserInfo from 'components/UserInfo/UserInfo';
import { useMemo, useState } from 'react';
import SignOut from './MyPage.style';

const MyPage = () => {
  const [isEditing, setEditingMode] = useState(false);

  const MemoizedUserInfo = useMemo(
    () => <UserInfo isEditing={isEditing} setEditingMode={setEditingMode} />,
    [isEditing],
  );
  const MemoizedReservationList = useMemo(() => <ReservationList />, [ReservationList]);
  const MemoizedSignOut = useMemo(() => <SignOut>{isEditing ? <button>회원탈퇴</button> : ''}</SignOut>, [isEditing]);

  return (
    <>
      {MemoizedUserInfo}
      {MemoizedReservationList}
      {MemoizedSignOut}
    </>
  );
};

export default MyPage;
