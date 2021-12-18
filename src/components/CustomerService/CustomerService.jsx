import React from "react";
import { Container, Row, Col } from 'react-bootstrap'
import "./style.css";
function CustomerService() {

  return (
    <Container fluid className="customerService-container">
      <Container>
        <h1 style={{fontSize: '2.1em', color:'rgba(245, 181, 27)'}}>
          Customer Service
        </h1>
      <Row className='customerService-description'>
        <Col style={{color:'white'}}>
        <h3>
        YouVend 3D Printing E-Commerce Shop CUSTOMER SERVICE is Currently Unavailable.....
        </h3>
        </Col>
      </Row>
      </Container>
    </Container>
  );
}

export default CustomerService;