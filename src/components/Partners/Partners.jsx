import React from "react";
import { Container, Row, Col } from 'react-bootstrap'
import "./style.css";

function Partners() {

  return (
    <Container fluid className="partners-container">
      <Row >
        <Col
        md={7}
        style={{
          paddingTop: "10px"
        }} 
        >
        <h1 style={{fontSize: '2.1em', color:'rgba(245, 181, 27)'}}>
          Partners
        </h1>
      </Col>
      </Row>
      <Row className='partners-description'>
        <Col style={{color:'white'}}>
        <h3>
        YouVend 3D Printing E-Commerce Shop is Looking for Partners for Expansion!
        </h3>
        </Col>
      </Row>
    </Container>
  );
}

export default Partners;