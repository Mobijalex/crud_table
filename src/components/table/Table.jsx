import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Table.css";
import EditBtn from "../Models/editModel/EditBtn";
import DeletModal from "../Models/deletModel/DeletModal";

import "../filter/filter.css";
import NewBtn from "../../components/create newBtn/NewBtn";

function Table() {
  const [demoValue, setDemoValue] = useState([]);
  const [showEditModel, setShowEditModel] = useState(false);
  const [showDeleteModel, setShowDeleteModel] = useState(false);
  const [filteredData, setFilteredData] = useState({
    firstName: "",
  });

  // ---------Calling the fuction in useeffect for getting the data

  useEffect(() => {
    // console.log("im worked");
    fetchData();
  }, [filteredData]);

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

  // Modal Open & Hide Functionality
  const handleCloseEditModel = () => setShowEditModel(false);
  const handleOpenEditModel = () => setShowEditModel(true);

  const handleCloseDeleteModel = () => setShowDeleteModel(false);
  const handleShowDeleteModel = () => setShowDeleteModel(true);

  // Filter Functionality
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilteredData({ ...filteredData, [name]: value });
  };

  const filterData = () => {
    return demoValue.filter((item) => {
      // Convert both the search text and item's firstName to lowercase for a case-insensitive search
      const searchFirstName = filteredData.firstName.toLowerCase();
      const itemFirstName = item.firstName.toLowerCase();

      // Check if the item's firstName contains the search text
      return itemFirstName.includes(searchFirstName);
    });
  };

  console.log("filteredData", filteredData);

  return (
    <>
      <div className="filter">
        <div className="dropdown">
          <input
            className="inputbox"
            type="text"
            name="firstName"
            placeholder="Search Name..."
            value={filteredData.firstName}
            onChange={handleFilterChange}
          />
          <datalist id="dataName"></datalist>
        </div>
        <div className="dropdown">
          <input
            className="inputbox"
            list="browsers"
            name="browser"
            placeholder="Search Email..."
          />
          <datalist id="browsers">
            <option value="sarath" />
            <option value="Monu" />
            <option value="jino" />
          </datalist>
        </div>
        <div className="dropdown">
          <input
            className="inputbox"
            list="browsers"
            name="browser"
            placeholder="Search Number..."
          />
          <datalist id="browsers">
            <option value="sarath" />
            <option value="Monu" />
            <option value="jino" />
          </datalist>
        </div>
        <div className="dropdown">
          <input
            className="inputbox"
            list="browsers"
            name="browser"
            placeholder="Search City..."
          />
          <datalist id="browsers">
            <option value="sarath" />
            <option value="Monu" />
            <option value="jino" />
          </datalist>
        </div>

        <div>
          <NewBtn />
        </div>
      </div>

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
        {filterData().map((item) => {
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
