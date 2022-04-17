import React, { useState } from 'react';
import { UserInfoFormContainer } from './Profile.style';
import { AuthType, authUpdate, selectAuth } from 'src/contexts/auth';
import { useAppSelector } from 'src/contexts/state.type';
import { useDispatch } from 'react-redux';
import { updateUser } from 'src/utils/users';
import { ProfileEditor } from './User.type';

const UserInfoForm = ({ isEditing, setEditingMode }: ProfileEditor) => {
  const { id, nickname, email, phone } = useAppSelector(selectAuth) as AuthType;

  const [tempNickname, setNickname] = useState<string>(nickname);
  const [tempPhone, setPhone] = useState<string>(phone);

  const handlerChange = ({ target }) => {
    target.id === 'nickname' ? setNickname(target.value) : setPhone(target.value);
  };

  const dispatch = useDispatch();

  const updateProfile = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isEditing) {
      setEditingMode(true);
      return;
    }

    if (/^[ㄱ-힣a-zA-Z0-9._]{2,6}$/.test(tempNickname) && /^[0-9]{11}$/.test(tempPhone)) {
      if (!(nickname === tempNickname && phone === tempPhone)) {
        const updatedProfile = await updateUser(id, tempNickname, tempPhone);
        dispatch(authUpdate({ ...updatedProfile }));
      }
      setEditingMode(false);
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
        {isEditing ? (
          <>
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
          </>
        ) : (
          <>
            <div>
              <span>닉네임</span>
              <span>{tempNickname}</span>
            </div>
            <div>
              <span>전화번호</span>
              <span>{!tempPhone ? '입력된 정보가 없습니다' : tempPhone}</span>
            </div>
          </>
        )}
        <button className="submit">{isEditing ? '확인' : '수정'}</button>
      </fieldset>
    </UserInfoFormContainer>
  );
};
export default UserInfoForm;
