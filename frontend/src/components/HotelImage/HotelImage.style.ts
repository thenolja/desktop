import styled from 'styled-components';

export const ImgageWrapper = styled.div`
  height: 30%;
  display: grid;
  gap: 2px;
  grid-template-columns: 1fr 1fr;

  figure {
    position: relative;
  }
`;
export const BigBox = styled.div``;

export const SmallBox = styled.div`
  color: #141d38;
  display: grid;
  gap: 2px;
  grid-template-columns: 2fr 2fr;
  line-height: 18px;
`;

export const Image = styled.img`
  display: block;
  object-fit: cover;
`;

export const ImageBtn = styled.button`
  background-color: transparent;
  block-size: 100%;
  display: block;
  inline-size: 100%;
  inset-block-end: 0;
  inset-block-start: 0;
  inset-inline-start: 0;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  z-index: 100;
  cursor: pointer;
`;

export const ImageModal = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 150;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  background-color: #141d38;
  color: #ffffff;
`;

export const ImageModalTitle = styled.div`
  // background-color: red;
  display: flex;
  align-items: center;
  height: 10%;
  width: 100%;
  // margin: 0px 0px -48px;
  // padding-right: 12px;
`;

export const SliderWrapper = styled.div`
  width: 90%;
  height: 100%;
  align-items: center;
`;

export const ImgFigcaption = styled.figcaption`
  color: #ffffff;
  padding: 50px 12px 8px;

  Slider {
    align-items: center;
  }
`;

export const ImgTitle = styled.div`
  margin-top: 20px;
  align-items: flex-start;
  display: flex;
  height: 70px;
`;