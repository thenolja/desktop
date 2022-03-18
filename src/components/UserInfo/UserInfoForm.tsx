import { useCallback } from 'react';
import { UserInfoFormContainer } from './Profile.style';

const UserInfoForm = ({ user, handleEditingMode }) => {
  const preventDefault = useCallback(e => e.preventDefault(), []);

  return (
    <UserInfoFormContainer onSubmit={preventDefault}>
      <fieldset>
        <legend>
          <strong>{user.currentUser}</strong>님의 프로필
        </legend>
        <div>
          <span>이메일</span>
          <span>{user.email}</span>
        </div>
        <div>
          <label htmlFor="nickname">닉네임</label>
          <input id="nickname" placeholder={user.currentUser} type="text"></input>
        </div>
        <div>
          <label htmlFor="phone">전화번호</label>
          <input id="phone" type="tel" placeholder={user.phone ?? ''}></input>
        </div>
        <button className="submit" onClick={() => handleEditingMode(true)}>
          확인
        </button>
      </fieldset>
    </UserInfoFormContainer>
  );
};
export default UserInfoForm;
