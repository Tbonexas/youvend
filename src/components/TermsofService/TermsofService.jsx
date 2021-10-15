import React from "react";
import { Container, Row, Col } from 'react-bootstrap'

function TermsofService() {

  return (
    <Container fluid className="termsofService-section">
      <Row style={{ justifyContent: "center", padding: "10px" }}>
        <Col
        md={7}
        style={{
          justifyContent: 'center',
          paddingTop: "30px"
        }} 
        >
        <h1 style={{fontSize: '2.1em'}}>
          Terms of Service
        </h1>
      </Col>
      </Row>
      <Row style={{justifyContent: 'center'}}>
        <Col>
        <h3>
        YouVend 3D Printing E-Commerce Shop Terms of Service ......
        </h3>
        </Col>
      </Row>
    </Container>
  );
}

export default TermsofService;