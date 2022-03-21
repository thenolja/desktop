import {
  Description,
  TitleWrapper,
  Title,
  SubTitle,
  Grade,
  Allbutton,
  GradeText,
  TagBox,
  TagTitle,
} from './HotelDescription.style';

const HotelDescription = ({ ...restProps }) => {
  return (
    <>
      <Description>
        <TitleWrapper>
          <Title>소노탐 고양(구 엠블호텔 고양)</Title>
          <SubTitle>Sono Calm Goyang (formerly The MVL Goyang)</SubTitle>
        </TitleWrapper>
        <TitleWrapper>
          <Grade>4.5/5-훌륭해요</Grade>
          <GradeText>이 숙박 시설의 청격 상태에 대한 고객님들의 평점은 4.5/5 입니다</GradeText>
          <Allbutton>871개 이용후기 모두보기</Allbutton>
        </TitleWrapper>
        <TagBox>
          <TagTitle>숙소소개</TagTitle>
          <p>4성급 호텔, 1 개 레스토랑 있음, 컨벤션 센터와 연결, 일산 호수 공원 근처</p>
        </TagBox>
      </Description>
    </>
  );
};

export default HotelDescription;
