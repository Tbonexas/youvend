import React from "react";
import { Container, Row, Col } from 'react-bootstrap'
import './style.css'

function Orders() {

  return (
    <Container fluid className="orders-container">
      <Container>
        <h1 style={{ fontSize: '2.1em', color: 'rgba(245, 181, 27)' }}>
          Orders
        </h1>
        <Row className='orders-description'>
          <Col style={{ color: 'white' }}>
            <h3>
              Track Your YouVend 3D Printing E-Commerce Iteam
            </h3>
          </Col>
        </Row>
        <Row className='orders-orders'>
          <Col>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Orders;