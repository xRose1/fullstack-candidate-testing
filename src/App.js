import './App.css';
import NavBar from './pages/navbar'
import SearchBar from './pages/searchbar';
import Cards from './pages/cards'
import React, { Component } from "react";
import Tables from './pages/table';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import BottomFooter from './pages/footer'

class App extends Component {
  render() {
    return (
    <div style={{
      backgroundColor: '#f5f5f5'
    }}>
      <div style={{
        paddingBottom: 25
      }}>
      <NavBar/>
      </div>
      <div style={{
        paddingBottom: 25,
        paddingLeft: 25,
        paddingRight: 25
      }}>
      <SearchBar/>
      </div>
      <Container>
        <Row>
          <Col><Cards/></Col>
          <Col xs={8}><Tables/></Col>
        </Row>
      </Container>
      <BottomFooter/>
      </div>
    )
  }
}


export default App;
