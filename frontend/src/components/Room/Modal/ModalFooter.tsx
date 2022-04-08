import { memo } from "react";
import { ModalFooterWrapper, SelectBtn } from "./Modal.style"

const ModalFooter = ({ handleClick }: { handleClick: () => void }) => {
  return (
    <ModalFooterWrapper>
      <SelectBtn onClick={handleClick}>이 객실 선택</SelectBtn>
    </ModalFooterWrapper>
  )
}

export default memo(ModalFooter);