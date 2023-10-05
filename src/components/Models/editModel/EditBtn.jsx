import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../editModel/editbtn.css";

function EditBtn({ showEditModel, handleCloseEditModel, handleShow }) {
  return (
    <div>
      <Modal
        show={showEditModel}
        onHide={handleCloseEditModel}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>EDIT DATA</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col>
              {" "}
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">
                  <i class="bi bi-person-fill"></i>
                </InputGroup.Text>
                <Form.Control
                  placeholder="Name"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
            </Col>
            <Col>
              {" "}
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">
                  <i class="bi bi-envelope"></i>
                </InputGroup.Text>
                <Form.Control
                  placeholder="Email"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              {" "}
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">
                  <i class="bi bi-calendar"></i>
                </InputGroup.Text>
                <Form.Control
                  placeholder="Age..."
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
            </Col>
            <Col>
              {" "}
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">
                  <i class="bi bi-geo-alt-fill"></i>
                </InputGroup.Text>
                <Form.Control
                  placeholder="City"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
            </Col>
          </Row>{" "}
          <Row>
            <Col>
              {" "}
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">
                  <i class="bi bi-telephone"></i>
                </InputGroup.Text>
                <Form.Control
                  placeholder="Phone:No"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
            </Col>
            <Col></Col>
          </Row>{" "}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseEditModel}>
            Close
          </Button>
          <Button
            className="submit"
            variant="primary"
            onClick={handleCloseEditModel}
          >
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default EditBtn;