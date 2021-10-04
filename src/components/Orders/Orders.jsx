import React from "react";
import { Container, Row, Col } from 'react-bootstrap'

function Orders() {

  return (
    <Container fluid className="orders-section">
      <Row style={{ justifyContent: "center", padding: "10px" }}>
        <Col
        md={7}
        style={{
          justifyContent: 'center',
          paddingTop: "30px"
        }} 
        >
        <h1 style={{fontSize: '2.1em'}}>
          Orders
        </h1>
      </Col>
      </Row>
      <Row style={{justifyContent: 'center'}}>
        <Col>
        <h3>
        Track Your YouVend 3D Printing E-Commerce Iteam
        </h3>
        </Col>
      </Row>
    </Container>
  );
}

export default Orders;