import React from "react";
import { Container, Row, Col } from 'react-bootstrap'
import "./style.css";
function ReturnPolicy() {

  return (
    <Container fluid className="returnPolicy-container">
      <Container>
        <h1 style={{ fontSize: '2.1em', color: 'rgba(245, 181, 27)' }}>
          Return Policy
        </h1>
        <Row className='returnPolicy-description'>
          <Col style={{ color: 'white' }}>
            <h3>
              YouVend 3D Printing E-Commerce Shop Return Policy Stands as ......
            </h3>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default ReturnPolicy;