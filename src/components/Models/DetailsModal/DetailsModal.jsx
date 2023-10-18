import React from "react";
import Modal from "react-bootstrap/Modal";
import "./detailsModel.css";

function DetailsModal({ showColDetail, modelData, handleCloseColModal }) {
  return (
    <div>
      {" "}
      <Modal
        show={showColDetail}
        onHide={handleCloseColModal}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <>
            <div>
              <div className="">
                <img src={modelData.img} alt="" />
                <p>{}</p>
              </div>
              <div className="">
                <span>Email:{}</span>
                <span>Phone No:{}</span>
                <span>Age:{}</span>
                <span>City:{}</span>
              </div>
            </div>
          </>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default DetailsModal;
