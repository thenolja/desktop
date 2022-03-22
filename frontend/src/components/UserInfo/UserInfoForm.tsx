import { useCallback } from 'react';
import { UserInfoFormContainer } from './Profile.style';
import { selectAuth } from 'src/contexts/auth';
import { useAppSelector } from 'src/contexts/state.type';

const UserInfoForm = ({ handleEditingMode }) => {
  const { id, nickname, email, phone } = useAppSelector(selectAuth);

  const preventDefault = useCallback((e: React.FormEvent<HTMLFormElement>) => e.preventDefault(), []);

  return (
    <UserInfoFormContainer onSubmit={preventDefault}>
      <fieldset>
        <legend>
          <strong>{nickname}</strong>님의 프로필
        </legend>
        <div>
          <span>이메일</span>
          <span>{email}</span>
        </div>
        <div>
          <label htmlFor="nickname">닉네임</label>
          <input id="nickname" placeholder={nickname} type="text"></input>
        </div>
        <div>
          <label htmlFor="phone">전화번호</label>
          <input id="phone" type="tel" placeholder={phone ?? ''}></input>
        </div>
        <button className="submit" onClick={() => handleEditingMode(true)}>
          확인
        </button>
      </fieldset>
    </UserInfoFormContainer>
  );
};
export default UserInfoForm;
