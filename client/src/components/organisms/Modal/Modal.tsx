import React, { ReactNode } from "react";
import styled from "styled-components";
import ReactModal from "react-modal";

const ModalWrapper = styled(ReactModal)`
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  padding: 32px;
  border-radius: 16px;
  transform: translate(-50%, -50%);
  background-color: ${({ theme }) => theme.colors.lightBrown};

  :focus {
    outline: none;
  }
`;

interface ModalProps {
  isOpen: boolean;
  handleClose: () => void;
  children: ReactNode;
}

export const Modal = ({ isOpen, handleClose, children }: ModalProps) => {
  return (
    <ModalWrapper
      isOpen={isOpen}
      onRequestClose={handleClose}
      style={{ overlay: { background: "#00000039" } }}
    >
      {children}
    </ModalWrapper>
  );
};
