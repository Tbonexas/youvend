import React from "react";
import './styles.css';
import UserCircle from '../../assets/images/user-circle-solid.svg';
import IdCard from '../../assets/images/id-card-solid.svg';
import Cubes from '../../assets/images/cubes-solid.svg';
import MailBulk from '../../assets/images/mail-bulk-solid.svg';
import ShieldAlt from '../../assets/images/shield-alt-solid.svg';
import { Container, Row, Col } from 'react-bootstrap';
import AccountCard from './AccountCards';
function Account() {

  return (
    <Container fluid className="account-container">
      <Container>
        <h1 style={{fontSize: '2.1em', color:'rgba(245, 181, 27)'}}>
          Account <img className='userAccount' src={UserCircle} alt='userCircle' />
        </h1>
      <Row style={{ justifyContent: 'center,'}}>
        <Col md={4} className="account-card">
          <AccountCard 
            ImgPath={IdCard}
            title='Profile'
            description='Personalized your Profile Info'
            path='/profile'
          />
        </Col>
        <Col md={4} className="account-card">
        <AccountCard 
            ImgPath={Cubes}
            title='Orders'
            description='Track your Orders'
            path='/orders'
          />
        </Col>
        <Col md={4} className="account-card">
        <AccountCard 
            ImgPath={MailBulk}
            title='Messages'
            description='View your Messages'
            path='/messages'
          />
        </Col>
        <Col md={4} className="account-card">
        <AccountCard 
            ImgPath={ShieldAlt}
            title='Security'
            description='Account Security Settings'
            path='/security'
          />
        </Col>
      </Row>
      </Container>
    </Container>
  );
}

export default Account;