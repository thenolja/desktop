import ReservationList from 'components/Reservation/Reservation';
import UserInfo from 'components/UserInfo/UserInfo';
import MyPageContainer from './MyPage.style';

const MyPage = () => {
  return (
    <>
      <UserInfo />
      <ReservationList />
      <MyPageContainer>
        <button>회원탈퇴</button>
      </MyPageContainer>
    </>
  );
};

export default MyPage;
