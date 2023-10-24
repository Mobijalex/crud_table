import React from "react";
import "../create newBtn/newbtn.css";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function NewBtn() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [formData, setFormData] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // console.log(formData);
  };

  const handleSubmit = async () => {
    await fetch("http://localhost:9000/Crud", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(combinedData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Data has been posted to the server:", data);
        handleClose();
      })
      .catch((error) => {
        console.error("Error posting data:", error);
      });
  };

  // ====================converting the image to a base64======================================================

  const [image, setImage] = useState("");

  const combinedData = { ...formData, image: image };

  function convertToBase64(e) {
    console.log(e);
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      console.log(reader.result);
      setImage(reader.result);
    };
    reader.onerror = (error) => {
      console.log("error", error);
    };
  }

  // ========================================================================================================

  return (
    <div>
      {" "}
      <button className="addBtn" onClick={handleShow}>
        ADD NEW
      </button>
      <Modal
        show={show}
        onHide={handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>ADD NEW DATA</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col>
              {" "}
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">
                  <i class="bi bi-person-badge-fill"></i>
                </InputGroup.Text>
                <Form.Control
                  placeholder="ID"
                  name="id"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  onChange={handleInputChange}
                />
              </InputGroup>
            </Col>
            <Col>
              {" "}
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">
                  <i class="bi bi-person-fill"></i>
                </InputGroup.Text>
                <Form.Control
                  placeholder="Name"
                  name="firstName"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  onChange={handleInputChange}
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
                  name="email"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  onChange={handleInputChange}
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
                  name="age"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  onChange={handleInputChange}
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
                  name="city"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  onChange={handleInputChange}
                />
              </InputGroup>
            </Col>
            <Col>
              {" "}
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">
                  <i class="bi bi-telephone"></i>
                </InputGroup.Text>
                <Form.Control
                  placeholder="Phone:No"
                  name="phone"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  onChange={handleInputChange}
                />
              </InputGroup>
            </Col>
          </Row>{" "}
          {/* ========================image upload============================== */}
          <Row>
            <Col>
              <form
                encType="multipart/form-data"
                action="/upload"
                method="post"
              >
                <input type="file" name="image" onChange={convertToBase64} />
                {image === "" || image == null ? (
                  ""
                ) : (
                  <img width={100} height={100} src={image} alt="" />
                )}
              </form>
            </Col>
          </Row>{" "}
          {/* ======================================================== */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button className="update" variant="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default NewBtn;
