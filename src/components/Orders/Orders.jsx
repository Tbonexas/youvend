import React from "react";
import { Container, Row, Col } from 'react-bootstrap'
import './style.css'

function Orders() {

  return (
    <Container fluid className="orders-section">
      <Row className='orders-Title'>
        <Col
        md={7}
        style={{
          
          paddingTop: "10px"
        }} 
        >
        <h1 style={{fontSize: '2.1em', color:'rgba(245, 181, 27)'}}>
          Orders
        </h1>
      </Col>
      </Row>
      <Row className='orders-description'>
        <Col style={{color:'white'}}>
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
  );
}

export default Orders;