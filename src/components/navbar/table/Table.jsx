import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../table/Table.css";

function Table() {
  const [demoValue, setDemoValue] = useState([]);

  // ---------Calling the fuction in useeffect for getting the data

  useEffect(() => {
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

  return (
    <>
      <Container className="tableContainer">
        <Row md={7}>
          <Col>ID</Col>
          <Col>Name</Col>
          <Col>Email</Col>
          <Col>Phone:No</Col>
          <Col>Age</Col>
          <Col>City</Col>
          <Col>Profile Picture</Col>
        </Row>

        {/* ----------Mapping the value from the api and adding it dynamicaly to the table */}
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
            </Row>
          );
        })}
      </Container>
    </>
  );
}

export default Table;
