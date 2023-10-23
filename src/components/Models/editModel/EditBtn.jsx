import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../editModel/editbtn.css";
import { useState } from "react";

function EditBtn({
  showEditModel,
  handleCloseEditModel,
  handleShow,
  dataToEdit,
  handleEdit,
}) {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    handleEdit({ ...dataToEdit, [name]: value });
  };

  const updateData = async (e) => {
    e.preventDefault();
    // console.log(
    //   dataToEdit.id,
    //   dataToEdit.firstName,
    //   dataToEdit.email,
    //   dataToEdit.age,
    //   dataToEdit.city,
    //   dataToEdit.phone
    // );
    try {
      await fetch(`http://localhost:9000/Crud/${dataToEdit._id}`, {
        method: "PUT",

        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          id: dataToEdit.id,
          firstName: dataToEdit.firstName,
          email: dataToEdit.email,
          age: dataToEdit.age,
          city: dataToEdit.city,
          phone: dataToEdit.phone,
          image: image,
        }),
      }).then((response) => {
        if (response.status === 200) {
          handleCloseEditModel();
          window.location.reload();
        }
      });
    } catch (error) {
      console.error(error);
    }
  };
  // ====================converting the image to a base64======================================================
  const [image, setImage] = useState("");

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
                  <i class="bi bi-person-badge-fill"></i>
                </InputGroup.Text>
                <Form.Control
                  placeholder="ID"
                  name="id"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  value={dataToEdit ? dataToEdit.id : ""}
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
                  value={dataToEdit ? dataToEdit.firstName : ""}
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
                  value={dataToEdit ? dataToEdit.email : ""}
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
                  value={dataToEdit ? dataToEdit.age : ""}
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
                  value={dataToEdit ? dataToEdit.city : ""}
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
                  aria-label="Username"
                  name="phone"
                  aria-describedby="basic-addon1"
                  value={dataToEdit ? dataToEdit.phone : ""}
                  onChange={handleInputChange}
                />
              </InputGroup>
            </Col>
          </Row>{" "}
          <Row>
            <Col>
              <form
                encType="multipart/form-data"
                action="/upload"
                method="post"
              >
                <input type="file" name="image" onChange={convertToBase64} />
                {image == "" || image == null ? (
                  ""
                ) : (
                  <img width={100} height={100} src={image} />
                )}
              </form>
            </Col>
          </Row>{" "}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseEditModel}>
            Close
          </Button>
          <Button className="update" variant="primary" onClick={updateData}>
            update
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default EditBtn;
