import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  Button,
  Collapse,
  Nav,
  NavItem,
  Navbar,
  NavbarBrand,
  NavbarToggler,
} from "reactstrap";

function Header(args) {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const { username } = JSON.parse(localStorage.getItem("userData"));
  console.log(username);

  const handleSignout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div>
      <Navbar {...args} expand="lg" className="shadow mb-3">
        <NavbarBrand>Chat Application</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse
          isOpen={isOpen}
          navbar
          className="d-flex justify-content-between"
        >
          <Nav className="ms-auto" navbar>
            <NavItem>
              <NavLink to="/" className="nav-link">
                {username}
              </NavLink>
            </NavItem>
          </Nav>
          <Button color="primary" onClick={handleSignout}>
            Signout
          </Button>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
