import React from "react";
import './styles.css';
import UserCircle from '../../assets/images/user-circle-solid.svg';
import { Container, Row, Col } from 'react-bootstrap'

function Account() {

  return (
    <Container fluid className="account-section">
      <Row style={{ justifyContent: "center", padding: "10px" }}>
        <Col
        md={7}
        style={{
          justifyContent: 'center',
          paddingTop: "30px"
        }} 
        >
        <h1 style={{fontSize: '2.1em', padding: '10px'}}>
          Account <img className='userAccount' src={UserCircle} alt='userCircle' />
        </h1>
      </Col>
      </Row>
      <Row style={{justifyContent: 'center', padding: '10px'}}>
        <Col>
        <h3>
        Profile
        </h3>
        </Col>
      </Row>
      <Row style={{justifyContent: 'center', padding: '10px'}}>
        <Col>
        <h3>
        Order
        </h3>
        </Col>
      </Row>
    </Container>
  );
}

export default Account;