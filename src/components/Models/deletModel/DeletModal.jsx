import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "../deletModel/deletModal.css";

function DeletModal({
  showDeleteModel,
  handleCloseDeleteModel,
  handleShow,
  dataToEdit,
  handleEdit,
}) {
  // ===================================================================

  const deleteData = async (e) => {
    const { name, value } = e.target;
    handleEdit({ ...dataToEdit, [name]: value });
    e.preventDefault();
    try {
      await fetch(`http://localhost:9000/Crud/${dataToEdit._id}`, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
      }).then((response) => {
        if (response.status === 200) {
          handleCloseDeleteModel();
          window.location.reload();
        }
      });
    } catch (error) {
      console.error(error);
    }
  };
  // ===========================================================================

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
        <Modal.Body>Are you sure you wand to delete the data ? </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseDeleteModel}>
            No
          </Button>
          <Button className="yes" variant="primary" onClick={deleteData}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default DeletModal;
