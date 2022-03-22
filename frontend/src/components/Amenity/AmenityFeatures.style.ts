import styled from 'styled-components';

export const FeaturesWrapper = styled.div`
  height: 100%;
  font-size: 14px;
  line-height: 18px;
  margin-top: 50px;
`;

export const FeaturesTitle = styled.h2`
  font-size: 22px;
  font-weight: 700;
  line-height: 26px;
  margin: 0px 0px 24px;
`;

export const FeaturesBox = styled.div`
  display: flex;
  justify-content: space-between;
  color: #333333;
  font-size: 14px;
  line-height: 18px;
  padding: 0px 12px;

  ul:not(:last-of-type){
    li:before {
      content: '✔';
      margin: 0 10px;
  }
`;

export const FeaturesBoxTitle = styled.h3`
  font-size: 18px;
  font-weight: 700;
  line-height: 22px;
  margin: 0px 0px 8px;
`;

export const FeatureList = styled.li`
  margin: 8px 0px 0px;
  padding-right: 20px;
  text-align: left;
`;
