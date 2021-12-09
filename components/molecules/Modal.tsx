import { useEffect } from "react";

import styled from "styled-components";
import ReactModal from "react-modal";
import { AiOutlineClose } from "react-icons/ai";

// keyof typeof ModalTypes

const StyledCloseIcon = styled(AiOutlineClose)`
  position: absolute;
  right: 15px;
  top: 15px;
  color: var(--black300);
  cursor: pointer;
`;
type ModalProps = {
  isVisible: boolean;
  onRequestClose: () => void;
  children: React.ReactNode;
  style?: ReactModal.Styles;
};

const Modal = ({
  isVisible,
  onRequestClose,
  style,

  children,
}: ModalProps) => {
  const modalStyles: ReactModal.Styles = {
    overlay: {
      zIndex: 999,
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      position: "fixed",
      ...(style && style.overlay),
    },
    content: {
      position: "relative",
      width: "95%",
      borderRadius: 15,
      inset: 0,
      margin: "50px auto",
      maxHeight: "90vh",
      overflow: "scroll",
      ...(style && style.content),
    },
  };
  useEffect(() => {
    ReactModal.setAppElement("#__next");
  });
  return (
    <ReactModal
      isOpen={isVisible}
      onRequestClose={onRequestClose}
      style={modalStyles}
    >
      <StyledCloseIcon onClick={onRequestClose} size={20} />
      {children}
    </ReactModal>
  );
};

export default Modal;
