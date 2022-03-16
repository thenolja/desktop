import {
  DescWrapper,
  TitleWrapper,
  Title,
  SubTitle,
  Grade,
  Allbutton,
  GradeText,
  AmenitiesBox,
  AmenitiesTitle,
  AmenitiesUL,
  AmenitiesList,
} from './HotelDescription.style';

const HotelDescription = () => {
  return (
    <>
      <DescWrapper>
        <Title>소노탐 고양(구 엠블호텔 고양)</Title>
        <SubTitle>Sono Calm Goyang (formerly The MVL Goyang)</SubTitle>
        <TitleWrapper>
          <Grade>4.5/5-훌륭해요</Grade>
          <GradeText>이 숙박 시설의 청격 상태에 대한 고객님들의 평점은 4.5/5 입니다</GradeText>
          <Allbutton>871개 이용후기 모두보기</Allbutton>
        </TitleWrapper>
        <AmenitiesBox>
          <AmenitiesTitle>인기 편의 시설</AmenitiesTitle>
          <AmenitiesUL>
            <AmenitiesList>세탁 서비스</AmenitiesList>
            <AmenitiesList>주차 포함</AmenitiesList>
            <AmenitiesList>무료 WiFi</AmenitiesList>
            <AmenitiesList>에어컨</AmenitiesList>
            <AmenitiesList>수영장</AmenitiesList>
            <AmenitiesList>레스토랑</AmenitiesList>
          </AmenitiesUL>
          <Allbutton>모두보기</Allbutton>
        </AmenitiesBox>
        <AmenitiesBox>
          <AmenitiesTitle>위생 및 안전 조치</AmenitiesTitle>
          <AmenitiesUL>
            <AmenitiesList>소독제로 청소함</AmenitiesList>
            <AmenitiesList>개인 보호 장비</AmenitiesList>
            <AmenitiesList>손 소독제 제공됨</AmenitiesList>
            <AmenitiesList>사회적 거리두기</AmenitiesList>
          </AmenitiesUL>
          <Allbutton>모두보기</Allbutton>
        </AmenitiesBox>
      </DescWrapper>
    </>
  );
};

export default HotelDescription;
