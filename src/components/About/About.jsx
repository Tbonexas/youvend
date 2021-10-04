import React from "react";
import { Container, Row, Col } from 'react-bootstrap'
import './styles.css';
import logo from '../../assets/navbarlogo/navlogo.png'

function About() {

  return (
    <Container fluid className="about-section" style={{}}>
      <Row style={{ justifyContent: "center", padding: "10px" }}>
        <Col
        md={7}
        style={{
          justifyContent: 'center',
          paddingTop: "30px"
        }} 
        >
        <h1 style={{fontSize: '2.1em', padding: '10px'}}>
          About
        </h1>
      </Col>
      </Row>
      <Row style={{justifyContent: 'center', padding: '10px'}}>
        <Col>
        <h3>
        YouVend is a 3D Printing E-Commerce Shop.
        </h3>
        </Col>
        <Col
              md={5}
              style={{ paddingTop: "20px", paddingBottom: "50px", paddingRight: "50px" }}
              className="about-img"
            >
              <img src={logo} alt="aboutLogo" className="img-fluid"  />
            </Col>
      </Row>
    </Container>
  );
}

export default About;