import React from "react";
import { Container, Row, Col } from 'react-bootstrap'
import "./style.css";
function PrivacyPolicy() {

  return (
    <Container fluid className="privacyPolicy-container">
      <Row>
        <Col
        md={7}
        style={{
          paddingTop: "10px"
        }} 
        >
        <h1 style={{fontSize: '2.1em', color:'rgba(245, 181, 27)'}}>
          Privacy Policy
        </h1>
      </Col>
      </Row>
      <Row className='privacyPolicy-description'>
        <Col style={{color:'white'}}>
        <h3>
        YouVend 3D Printing E-Commerce Shop Privacy Policy Stands as ......
        </h3>
        </Col>
      </Row>
    </Container>
  );
}

export default PrivacyPolicy;