import React, { FunctionComponent } from "react";
import { Button, Modal } from "react-bootstrap";

interface ModalComponentProps {
    showModal: boolean;
    handleClose: () => void;
}

const ModalComponent: FunctionComponent<ModalComponentProps> = ({
  children,
  showModal,
  handleClose,  
}) => {


  return (
    <>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add TODO</Modal.Title>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
      </Modal>

    </>
  );
};

export default ModalComponent;
