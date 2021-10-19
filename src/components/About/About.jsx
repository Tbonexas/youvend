import React from "react";
import { Container, Row, Col } from 'react-bootstrap'
import './styles.css';
import logo from '../../assets/navbarlogo/navlogo.png'

function About() {

  return (
    <Container fluid className="about-container">
      <Row className='about-Title'>
        <Col
        md={7}
        style={{
          paddingTop: "10px"
        }} 
        >
        <h1 style={{fontSize: '2.1em', color:'rgba(245, 181, 27)'}}>
          About
        </h1>
      </Col>
      </Row>
      <Row className='about-description'>
        <Col style={{color:'white'}}>
        <h3>
        YouVend is a 3D Printing E-Commerce Shop.
        </h3>
        </Col>
        <Col
              md={5}
              style={{ paddingTop: "20px", paddingBottom: "50px" }}
              className="about-img"
            >
              <img src={logo} alt="aboutLogo" className="img-fluid"  />
            </Col>
      </Row>
    </Container>
  );
}

export default About;