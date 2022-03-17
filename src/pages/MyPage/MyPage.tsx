import ReservationList from 'components/Reservation/Reservation';
import UserInfo from 'components/UserInfo/UserInfo';
import { useMemo, useState } from 'react';
import { useAppSelector } from 'src/contexts/state.type';
import { selectAuth } from 'src/contexts/auth';
import SignOut from './MyPage.style';
import ProtectedRoute from '../ProtectedRouter/ProtectedRouter';

const MyPage = () => {
  const [isEditing, setEditingMode] = useState(false);
  const { currentUser, email } = useAppSelector(selectAuth);

  const MemoizedUserInfo = useMemo(
    () => <UserInfo isEditing={isEditing} setEditingMode={setEditingMode} />,
    [isEditing],
  );
  const MemoizedReservationList = useMemo(() => <ReservationList />, [ReservationList]);
  const MemoizedSignOut = useMemo(() => <SignOut>{isEditing ? <button>회원탈퇴</button> : ''}</SignOut>, [isEditing]);

  return (
    <ProtectedRoute isAllow={!!(currentUser && email)}>
      {MemoizedUserInfo}
      {MemoizedReservationList}
      {MemoizedSignOut}
    </ProtectedRoute>
  );
};

export default MyPage;
