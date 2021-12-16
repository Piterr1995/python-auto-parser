import { useEffect } from "react";

import styled from "styled-components";
import ReactModal from "react-modal";
import { AiOutlineClose } from "react-icons/ai";
import { theme } from "style/theme";

// keyof typeof ModalTypes

const StyledCloseIcon = styled(AiOutlineClose)`
  position: absolute;
  right: 15px;
  top: 15px;
  color: var(--black300);
  cursor: pointer;

  @media screen and ${theme.breakpoints.bigTablet} {
    transform: scale(1.6, 1.6);
    right: 2rem;
    top: 2rem;

    &:hover {
      color: var(--green100);
    }
  }
`;

const ModalContent = styled.div`
  position: relative;
  width: 95%;
  border-radius: 1.5rem;
  inset: 0;
  margin: 5rem auto;
  max-height: 90vh;
  overflow: scroll;

  @media screen and ${theme.breakpoints.bigTablet} {
    width: 800px;
    max-height: 80vh;
  }
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
      ...style?.overlay,
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
      contentElement={(props, children) => (
        <ModalContent {...props}>{children}</ModalContent>
      )}
    >
      <StyledCloseIcon onClick={onRequestClose} size={20} />
      {children}
    </ReactModal>
  );
};

export default Modal;
