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

const HotelDescription = ({ hotelInfo }) => {
  return (
    <>
      <Description>
        <TitleWrapper>
          <Title>{hotelInfo.name}</Title>
        </TitleWrapper>
        <TitleWrapper>
          <Grade>
            {' '}
            {hotelInfo.formattedRating}/{hotelInfo.formattedScale}-{hotelInfo.badgeText}
          </Grade>
          <GradeText>
            이 숙박 시설의 청격 상태에 대한 고객님들의 평점은 {hotelInfo.formattedRating}/ {hotelInfo.formattedScale}{' '}
            입니다
          </GradeText>
          <Allbutton>{hotelInfo.totalcnt}개 이용후기 모두보기</Allbutton>
        </TitleWrapper>
        <TagBox>
          <TagTitle>숙소소개</TagTitle>
          {hotelInfo.tagline}
          <p>- {hotelInfo.hotelSize} </p>
          <p>- {hotelInfo.arriving}</p>
          <p>- {hotelInfo.leaving}</p>
        </TagBox>
      </Description>
    </>
  );
};

export default HotelDescription;
