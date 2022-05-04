import { useState } from 'react';
import { setDocumentTitle } from 'src/utils/setDocumentTitle';
import { Helmet } from 'react-helmet-async';
import ReservationList from 'components/Reservation/Reservation';
import SignOut from './MyPage.style';
import Profile from 'components/UserInfo/Profile';

const MyPage = () => {
  const [isEditingMode, setEditingMode] = useState<boolean>(false);

  return (
    <>
      <Helmet>
        <title>{setDocumentTitle('마이페이지')}</title>
      </Helmet>
      <Profile isEditingMode={isEditingMode} setEditingMode={setEditingMode} />
      <ReservationList />
      <SignOut>{isEditingMode ? <button className="submit">회원탈퇴</button> : ''}</SignOut>,
    </>
  );
};

export default MyPage;
