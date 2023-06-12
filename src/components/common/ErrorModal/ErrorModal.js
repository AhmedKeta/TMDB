import React from "react";
import { Modal, Button } from "react-bootstrap";
import  ReactDOM  from "react-dom";

const ErrorModal = ({ show, handleClose, errors }) => {
  return ReactDOM.createPortal(
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Error!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {errors.map((error, index) => (
          <p key={index}>{error}</p>
        ))}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleClose}>
          OK
        </Button>
      </Modal.Footer>
    </Modal>, document.getElementById("error-modal-root")
  );
};

export default ErrorModal;
