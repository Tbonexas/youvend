import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./styles.css";

function AccountCards(props) {
  return (
    <Card className="account-card-view">
      <Card.Img variant="top" src={props.img} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description} 
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
export default AccountCards;
