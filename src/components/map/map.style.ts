import styled from 'styled-components';

export const MapWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-item: flex-start;
  width: 370px;
  height: 310px;
`;

export const MapCover = styled.button`
  align-items: flex-start;
  width: 100%;
  height: 100%;
`;

export const MapAddress = styled.div`
  // flex-basis: 100%;
  font-size: 14px;
  line-height: 18px;
`;

export const MapModal = styled.div`
  position: fixed;
  z-index: 10;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  background-color: #ffffff;
`;

export const ModalHeader = styled.div`
  align-items: center;
  box-shadow: #000b26 0px 1px 0px 0px;
  display: flex;
  font-size: 14px;
  line-height: 18px;
  padding: 0px 12px 0px 0px;
`;

export const ModalTitle = styled.h2`
  font-weight: 500;
  line-height: 20px;
  color: #141d38;
`;
export const ModalCloseBtn = styled.button`
  weight: 48px;
  height: 48px;
  padding: 0px 12px;
`;
export const ModalMapWrapper = styled.div`
  color: #141d38;
`;
