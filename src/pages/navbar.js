import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Component } from 'react'
import Button from 'react-bootstrap/Button'
import Avatar from '@material-ui/core/Avatar';


class NavBar extends Component {
  render() {
    return (
      <div class="font-weight-bold">
        <Navbar style={{backgroundColor: '#FFFFFF'}}>
        <Navbar.Brand style={{color: '#219DF0', paddingRight: 180}}href="#home">Health Explore</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">PROFILE</Nav.Link>
          <Nav.Link href="#features">JOBS</Nav.Link>
          <Nav.Link href="#pricing">PROFESSIONAL NETWORK</Nav.Link>
          <Nav.Link href="#features">LOUNGE</Nav.Link>
          <Nav.Link href="#pricing">SALARY</Nav.Link>
        </Nav>
        <Button  variant="outline-primary">
          Create Job
        </Button>
        <Avatar>JO</Avatar>
        <Button variant="link">LOGOUT</Button>
      </Navbar>  
      </div>
    );  
    }
  }

export default NavBar 

