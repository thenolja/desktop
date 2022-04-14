import { memo } from "react";
import { FormArticle, Guidance, InputDiv, Necessary, SectionTitle } from "./Payment.style";
import { UserInfoType } from "./Payment.type";

const UserInfo = ({ username, phone, handleUserClick, handleUserInput }:UserInfoType) => {
  return (
    <FormArticle>
      <SectionTitle>
        이용자 정보<Necessary>*</Necessary>
      </SectionTitle>
      <Guidance>상품 이용 시 필요한 필수 정보입니다.</Guidance>
      <section>
        <input type="checkbox" id="sameUser" onClick={handleUserClick} />
        <label htmlFor="sameUser">예약자 정보와 동일합니다.</label>
      </section>
      <section>
        <label htmlFor="username">
          성명<Necessary>*</Necessary>
        </label>
        <InputDiv>
          <input type="text" id="username" value={username || ''} onInput={handleUserInput} placeholder="성명을 입력해주세요" />
        </InputDiv>
      </section>
      <section>
        <label htmlFor="phone">
          휴대폰 번호<Necessary>*</Necessary>
        </label>
        <InputDiv>
          <input type="tel" id="phone" value={phone || ''} onInput={handleUserInput} placeholder="휴대폰 번호를 입력해주세요" />
        </InputDiv>
      </section>
    </FormArticle>
  )
}

export default memo(UserInfo);