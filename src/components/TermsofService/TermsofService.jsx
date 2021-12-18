import React from "react";
import { Container, Row, Col } from 'react-bootstrap'
import "./style.css";
function TermsofService() {

  return (
    <Container fluid className="termsofService-container">
      <Container>
        <h1 style={{ fontSize: '2.1em', color: 'rgba(245, 181, 27)' }}>
          Terms of Service
        </h1>
        <Row className='termsofService-description'>
          <Col style={{ color: 'white' }}>
            <h3>
              YouVend 3D Printing E-Commerce Shop Terms of Service ......
            </h3>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default TermsofService;