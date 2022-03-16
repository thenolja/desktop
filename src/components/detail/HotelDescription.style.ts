import styled from 'styled-components';

export const DescWrapper = styled.div`
  border-radius: 0px 0px 8px 8px;
  color: #141d38;
  margin: 0px 0px 12px;
  padding: 12px;
`;
export const TitleWrapper = styled.div`
  padding: 12px 0px 16px;
`;
export const Title = styled.h1`
  margin: 16px 0px 6px;
  line-height: 36px;
  color: #141d38;
  font-size: 20px;
  font-weight: 500;
`;
export const SubTitle = styled.h2`
  margin: 4px 0px 0px;
  color: #343b53;
  font-size: 14px;
  line-height: 18px;
`;

export const Grade = styled.h3`
  color: #141d38;
  font-size: 20px;
  font-weight: 500;
  line-weight: 24px;
  padding 0px 0px 12px;
`;

export const GradeText = styled.div`
  color: #343b53;
  font-size: 14px;
  line-height: 18px;
`;

export const AmenitiesBox = styled.div`
  color: #141d38;
  font-size: 14px;
  line-height: 18px;
  padding: 0px 0px 24px;
`;
export const AmenitiesTitle = styled.h3`
  padding: 0px 0px 12px;
  font-size: 20px;
  font-weight: 500;
`;

export const AmenitiesUL = styled.ul`
  color: #343b53;
  display:grid;
  gap:16px;
  grid-auto-columns:minmax(0px,1fr);
  grid-auto-flow:columns;
  grid-template-columns:305px 305px;
  grid-template-rows:18px 18px 18px;
  font-size: 14px;
  line-height:10px
  padding: 0px 0px 0px 32px;
  text-align: left;
`;

export const AmenitiesList = styled.li`
  color: #343b53;
  font-size: 14px;
  line-height:10px
  padding: 0px 0px 0px 32px;
  text-align: left;
`;

export const Allbutton = styled.button`
  color: #3662d8;
  align-items: flex-start;
  display: flex;
`;
