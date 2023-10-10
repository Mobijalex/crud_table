import React from "react";
import "../navbar/navbar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavBar1() {
  return (
    <div>
      <Navbar data-bs-theme="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>

            <Nav.Link href="/table">Table</Nav.Link>
          </Nav>
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar1;
