import { useCallback } from 'react';
import { UserInfoFormContainer } from './Profile.style';
import { UserInfoType } from './User';

const UserInfoForm = ({ user, handleEditingMode }: UserInfoType) => {
  const preventDefault = useCallback((e: React.FormEvent<HTMLFormElement>) => e.preventDefault(), []);

  return (
    <UserInfoFormContainer onSubmit={preventDefault}>
      <fieldset>
        <legend>
          <strong>{user.nickname}</strong>님의 프로필
        </legend>
        <div>
          <span>이메일</span>
          <span>{user.email}</span>
        </div>
        <div>
          <label htmlFor="nickname">닉네임</label>
          <input id="nickname" placeholder={user.nickname} type="text"></input>
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
