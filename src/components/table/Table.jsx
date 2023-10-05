import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Table.css";
import EditBtn from "../Models/editModel/EditBtn";
import DeletModal from "../Models/deletModel/DeletModal";
import Filter from "../filter/Filter";

function Table() {
  const [demoValue, setDemoValue] = useState([]);

  // ---------Calling the fuction in useeffect for getting the data

  useEffect(() => {
    // console.log("im worked");
    fetchData();
  }, []);

  // ---------Fetching dummy data from an api

  const fetchData = async () => {
    try {
      const response = await fetch("https://dummyjson.com/users");
      const jsonData = await response.json();
      setDemoValue(jsonData.users);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // ----------loging the useState for checking the fetched data

  // console.log("demoValue", demoValue);

  // -=-=-=-=-=-=-=-=-=-=-----For edit button

  const [showEditModel, setShowEditModel] = useState(false);
  const [showDeleteModel, setShowDeleteModel] = useState(false);

  const handleCloseEditModel = () => setShowEditModel(false);
  const handleOpenEditModel = () => setShowEditModel(true);

  const handleCloseDeleteModel = () => setShowDeleteModel(false);
  const handleShowDeleteModel = () => setShowDeleteModel(true);

  return (
    <>
      <Filter demoValue={demoValue} />
      <div className="tableContainer">
        <Row md={7}>
          <Col>ID</Col>
          <Col>Name</Col>
          <Col>Email</Col>
          <Col>Phone:No</Col>
          <Col>Age</Col>
          <Col>City</Col>
          <Col>Profile Picture</Col>
          <Col>Actions</Col>
        </Row>

        {/* --------------------Mapping the value from the api and adding it dynamicaly to the table */}
        {demoValue.map((item) => {
          return (
            <Row key={item.id} md={7} className="tableRow">
              <Col>{item.id}</Col>
              <Col>
                {item.firstName} {item.lastName}
              </Col>
              <Col>{item.email}</Col>
              <Col>{item.phone}</Col>
              <Col>{item.age}</Col>
              <Col>{item.address.city}</Col>
              <Col>
                <img src={item.image} alt="" className="profileImg" />
              </Col>
              <Col className="d-flex gap-2 ">
                {/* -------------------------------------Edit model srction starts here */}
                <Button variant="outline-success" onClick={handleOpenEditModel}>
                  <i class="bi bi-pencil"></i>
                </Button>
                {/* --------------------------------Edit model srction ends here */}
                <Button
                  variant="outline-danger"
                  onClick={handleShowDeleteModel}
                >
                  <i class="bi bi-trash3"></i>
                </Button>{" "}
              </Col>
            </Row>
          );
        })}
      </div>
      <EditBtn
        showEditModel={showEditModel}
        handleCloseEditModel={handleCloseEditModel}
        handleOpenEditModel={handleOpenEditModel}
      />
      <DeletModal
        showDeleteModel={showDeleteModel}
        handleCloseDeleteModel={handleCloseDeleteModel}
        handleShowDeleteModel={handleShowDeleteModel}
      />
    </>
  );
}

export default Table;
