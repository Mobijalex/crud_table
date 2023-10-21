import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../editModel/editbtn.css";

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

  const updateData = () => {
    console.log(dataToEdit.firstName);
  };

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
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Control type="file" />
              </Form.Group>
            </Col>
          </Row>{" "}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseEditModel}>
            Close
          </Button>
          <Button className="submit" variant="primary" onClick={updateData}>
            update
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default EditBtn;
