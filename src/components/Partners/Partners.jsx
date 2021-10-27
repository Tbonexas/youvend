import React from "react";
import { Container, Row, Col } from 'react-bootstrap'
import "./style.css";

function Partners() {

  return (
    <Container fluid className="partners-container">
      <Container>
        <h1 style={{ fontSize: '2.1em', color: 'rgba(245, 181, 27)' }}>
          Partners
        </h1>
        <Row className='partners-description'>
          <Col style={{ color: 'white' }}>
            <h3>
              YouVend 3D Printing E-Commerce Shop is Looking for Partners for Expansion!
            </h3>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Partners;