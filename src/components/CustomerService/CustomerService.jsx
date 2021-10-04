import React from "react";
import { Container, Row, Col } from 'react-bootstrap'

function CustomerService() {

  return (
    <Container fluid className="customerService-section">
      <Row style={{ justifyContent: "center", padding: "10px" }}>
        <Col
        md={7}
        style={{
          justifyContent: 'center',
          paddingTop: "30px"
        }} 
        >
        <h1 style={{fontSize: '2.1em', padding: '10px'}}>
          Customer Service
        </h1>
      </Col>
      </Row>
      <Row style={{justifyContent: 'center', padding: '10px'}}>
        <Col>
        <h3>
        YouVend 3D Printing E-Commerce Shop CUSTOMER SERVICE is Currently Unavailable.....
        </h3>
        </Col>
      </Row>
    </Container>
  );
}

export default CustomerService;