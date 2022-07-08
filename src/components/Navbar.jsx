import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function NavbarComponent() {
  const navigate = useNavigate();

  const clickLogin = () => {
    navigate("/login");
  };

  const clickRegister = () => {
    navigate("/register");
  };

  const clickHome = () => {
    navigate("/");
  };

  const clickLogout = () => {};

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand onClick={clickHome}>Your Todo App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link onClick={clickLogin}>Login</Nav.Link>
              <Nav.Link onClick={clickRegister}>Register</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <div>
            <Nav.Link onClick={clickLogout}>Logout</Nav.Link>
          </div>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarComponent;
