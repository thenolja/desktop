import styled from 'styled-components';

export const MapWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 40vw;
  height: 40vh;
  padding-top: 10px;
`;

export const MapCover = styled.button`
  width: 40vw;
  height: 30vh;
  margin-bottom: 10px;
`;

export const MapAddress = styled.div`
  font-size: 14px;
  line-height: 18px;
`;

export const MapModal = styled.div`
  position: fixed;
  z-index: 2;
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
  font-weight: 700;
  line-height: 20px;
  color: #141d38;
`;
export const ModalCloseBtn = styled.button`
  width: 48px;
  height: 48px;
  padding: 0px 12px;
`;
export const ModalMapWrapper = styled.div`
  color: #141d38;
`;
