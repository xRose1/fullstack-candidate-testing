import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './styles.css';
import {Button} from 'react-bootstrap';
import Avatar from 'react-avatar';

const Header = () => {
  return (
    <header className="Header">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/" className="main-title">HEALTH EXPLORE</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link className="menu-title">PROFILE</Nav.Link>
            <Nav.Link className="menu-title">JOBS</Nav.Link>
            <Nav.Link className="menu-title">PROFESSIONAL NETWORK</Nav.Link>
            <Nav.Link className="menu-title">LOUNGE</Nav.Link>
            <Nav.Link className="menu-title">SALARY</Nav.Link>
            <Button variant="outline-primary" className="menu-job">CREATE JOB</Button>
            <Avatar name={"Joe Owen"} className="menu-avatar" color="#bdbdbd" maxInitials={2} round={true}/>
            <Nav.Link className="menu-title">LOGOUT</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}

export default Header;