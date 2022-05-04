import React, { useEffect, useState } from 'react';
import { UserInfoFormContainer } from './Profile.style';
import { AuthType, authUpdate, selectAuth } from 'src/contexts/auth';
import { useAppSelector } from 'src/contexts/state.type';
import { useDispatch } from 'react-redux';
import { getPhoneNumber, isValidProfile, updateUser } from 'src/utils/users';
import { ProfileEditor } from './User.type';

const UserInfoForm = ({ isEditingMode, setEditingMode }: ProfileEditor) => {
  const { id, nickname, email } = useAppSelector(selectAuth) as AuthType;

  const [tempNickname, setNickname] = useState<string>(nickname);

  const [tempPhone, setPhone] = useState<string>('');

  let initialPhone = '';
  useEffect(() => {
    const getPhone = async () => {
      if (id) {
        const {
          0: { phone },
        } = await getPhoneNumber(id);
        initialPhone = phone;
        setPhone(initialPhone);
      }
    };
    getPhone();
  }, []);

  const handlerChange = ({ target: { id, value } }) => {
    id === 'nickname' ? setNickname(value) : setPhone(value);
  };

  const dispatch = useDispatch();

  const updateProfile = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isEditingMode) {
      setEditingMode(true);
      return;
    }

    if (isValidProfile(tempNickname, tempPhone)) {
      if (tempNickname === nickname && tempPhone === initialPhone) return;
      const updatedProfile = await updateUser(id, tempNickname, tempPhone);
      dispatch(authUpdate({ ...updatedProfile }));
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
        {isEditingMode ? (
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
        <button className="submit">{isEditingMode ? '확인' : '수정'}</button>
      </fieldset>
    </UserInfoFormContainer>
  );
};
export default UserInfoForm;
