import { useState } from 'react';
import { UserInfoFormContainer } from './Profile.style';
import { authUpdate, selectAuth } from 'src/contexts/auth';
import { useAppSelector } from 'src/contexts/state.type';
import { useDispatch } from 'react-redux';
import { updateUser } from 'src/utils/users';

const UserInfoForm = ({ handleEditingMode }) => {
  const { id, nickname, email, phone } = useAppSelector(selectAuth);

  const [tempNickname, setNickname] = useState<string>(nickname);
  const [tempPhone, setPhone] = useState<string>(phone);

  const handlerChange = ({ target }) => {
    target.id === 'nickname' ? setNickname(target.value) : setPhone(target.value);
  };

  const dispatch = useDispatch();

  const updateProfile = async e => {
    e.preventDefault();
    if (nickname === tempNickname && phone === tempPhone) return;

    if (/^[ㄱ-힣a-zA-Z0-9._]{2,6}$/.test(tempNickname) && /^[0-9]{11}$/.test(tempPhone)) {
      const updatedProfile = await updateUser(id, tempNickname, tempPhone);
      dispatch(authUpdate({ ...updatedProfile }));
      handleEditingMode(false);
    }
  };

  return (
    <UserInfoFormContainer onSubmit={updateProfile}>
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
          <input
            id="nickname"
            type="text"
            required
            minLength={1}
            maxLength={6}
            value={tempNickname}
            placeholder="닉네임(최대 6자리까지)"
            onChange={handlerChange}
          ></input>
        </div>
        <div>
          <label htmlFor="phone">전화번호</label>
          <input
            id="phone"
            type="tel"
            required
            minLength={11}
            maxLength={11}
            value={tempPhone}
            placeholder={'11자리 숫자를 입력하세요'}
            onChange={handlerChange}
          ></input>
        </div>
        <button className="submit">확인</button>
      </fieldset>
    </UserInfoFormContainer>
  );
};
export default UserInfoForm;
