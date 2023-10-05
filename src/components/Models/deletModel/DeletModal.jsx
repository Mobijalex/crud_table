import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "../deletModel/deletModal.css";

function DeletModal({ showDeleteModel, handleCloseDeleteModel, handleShow }) {
  return (
    <div>
      {" "}
      <Modal
        show={showDeleteModel}
        onHide={handleCloseDeleteModel}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Delet Data </Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you wand to delete the data ?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseDeleteModel}>
            No
          </Button>
          <Button className="yes" variant="primary">
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default DeletModal;
