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
    right: 2rem;
    top: 2rem;

    &:hover {
      color: var(--green100);
    }
  }
`;

const ModalContent = styled.div`
  width: 95%;
  margin: 5rem auto;

  @media screen and ${theme.breakpoints.bigTablet} {
    width: 600px;
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
    content: {
      borderRadius: 30,
      inset: 0,
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
