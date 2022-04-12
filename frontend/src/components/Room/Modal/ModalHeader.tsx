import { memo } from "react";
import { CloseBtn, ModalHeaderWrapper } from "./Modal.style";

const ModalHeader = ({ name, toggleModal }: { name: string, toggleModal: () => void }) => {
  return (
    <ModalHeaderWrapper>
      <span>{name}</span>
      <CloseBtn onClick={toggleModal} />
    </ModalHeaderWrapper>
  )
}

export default memo(ModalHeader);