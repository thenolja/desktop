import ReservationList from 'components/Reservation/Reservation';
import { useMemo, useState, useCallback } from 'react';
import SignOut from './MyPage.style';
import Profile from 'components/UserInfo/Profile';

const MyPage = () => {
  const [isEditing, setEditingMode] = useState<boolean>(false);

  return (
    <>
      <Profile isEditing={isEditing} setEditingMode={setEditingMode} />
      <ReservationList />
      <SignOut>{isEditing ? <button className="submit">회원탈퇴</button> : ''}</SignOut>,
    </>
  );
};

export default MyPage;
