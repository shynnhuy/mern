import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { NavLink as LinkNav } from "react-router-dom";

const AppNavBar = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const goHome = () => {
    props.history.push("/");
  };

  return (
    <div>
      <Navbar color="dark" dark expand="sm">
        <NavbarBrand onClick={goHome} style={{ color: "white" }}>
          reactstrap
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <LinkNav to={"/login"} className="nav-link">
                Login
              </LinkNav>
            </NavItem>
            <NavItem>
              <NavLink onClick={goHome}>GitHub</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default AppNavBar;
