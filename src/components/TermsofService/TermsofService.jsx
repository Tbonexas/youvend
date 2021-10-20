import React from "react";
import { Container, Row, Col } from 'react-bootstrap'
import "./style.css";
function TermsofService() {

  return (
    <Container fluid className="termsofService-container">
      <Row >
        <Col
        md={7}
        style={{
          paddingTop: "10px"
        }} 
        >
        <h1 style={{fontSize: '2.1em', color:'rgba(245, 181, 27)'}}>
          Terms of Service
        </h1>
      </Col>
      </Row>
      <Row className='termsofService-description'>
        <Col style={{color:'white'}}>
        <h3>
        YouVend 3D Printing E-Commerce Shop Terms of Service ......
        </h3>
        </Col>
      </Row>
    </Container>
  );
}

export default TermsofService;