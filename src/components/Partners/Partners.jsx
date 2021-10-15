import React from "react";
import { Container, Row, Col } from 'react-bootstrap'

function Partners() {

  return (
    <Container fluid className="partners-section">
      <Row style={{ justifyContent: "center", padding: "10px" }}>
        <Col
        md={7}
        style={{
          justifyContent: 'center',
          paddingTop: "30px"
        }} 
        >
        <h1 style={{fontSize: '2.1em'}}>
          Partners
        </h1>
      </Col>
      </Row>
      <Row style={{justifyContent: 'center'}}>
        <Col>
        <h3>
        YouVend 3D Printing E-Commerce Shop is Looking for Partners for Expansion!
        </h3>
        </Col>
      </Row>
    </Container>
  );
}

export default Partners;