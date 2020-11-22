import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Avatar from "react-avatar";
import { Button } from "@material-ui/core";

const NavBar = () => {
  return (
    <header className="bg-gray-200">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/" className="text-blue-500 text-base">
          {"HEALTH EXPLORE"}
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="ml-auto">
            <Nav.Link className="text-sm text-gray-800 font-bold pt-3 ml-3 mr-3">
              {"PROFILE"}
            </Nav.Link>
            <Nav.Link className="text-sm text-gray-800 font-bold pt-3 ml-3 mr-3">
              {"JOBS"}
            </Nav.Link>
            <Nav.Link className="text-sm text-gray-800 font-bold pt-3 ml-3 mr-3">
              {"PROFESSIONAL NETWORK"}
            </Nav.Link>
            <Nav.Link className="text-sm text-gray-800 font-bold pt-3 ml-3 mr-3">
              {"LOUNGE"}
            </Nav.Link>
            <Nav.Link className="text-sm text-gray-800 font-bold pt-3 ml-3 mr-3">
              {"SALARY"}
            </Nav.Link>
            <Button
              variant="contained"
              color="primary"
              className="text-sm ml-3 mr-3 h-7 mt-2"
            >
              {"CREATE JOB"}
            </Button>
            <Avatar
              name={"Lai Kang"}
              className="w-8 h-8 mt-1"
              color="#bbbbbb"
              round={true}
            />
            <Nav.Link className="text-sm text-gray-800 font-bold pt-3">
              {"LOGOUT"}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default NavBar;
