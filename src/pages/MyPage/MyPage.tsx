import ReservationList from 'components/Reservation/Reservation';
import UserInfo from 'components/UserInfo/UserInfo';
import SignOut from './MyPage.style';

const MyPage = () => {
  return (
    <>
      <UserInfo />
      <ReservationList />
      <SignOut>회원탈퇴</SignOut>
    </>
  );
};

export default MyPage;
