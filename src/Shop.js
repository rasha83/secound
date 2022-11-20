
import React, { useState } from "react";
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card';
import {Link} from "react-router-dom"
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Shop1 from './Photos/Shop1.jpg'
import { BsFillBasket2Fill } from "react-icons/bs"
import { Container } from "react-bootstrap";

function Shop(props) {
  let prod=props.x
  //  console.log(prod)
  return (
  <div className="maincard ">
    
  <div className="first">
    <Card className="bg-dark text-white">
    <Card.Img src={Shop1} alt="Card image" />
    </Card>
  </div>
  <Container>
  <div className="sec" >
  <Row xs={1} md={2} className="g-4" lg={4}>
  {prod.map((j) => (
      
      <Col key={j.id}>
        <Card >
          <Card.Img variant="top" src={j.img} />
          <Card.Body>
            <Card.Title>{j.name}</Card.Title>
            <Card.Text>${j.price}</Card.Text>
           
            <Button variant="warning"  onClick={()=>props.z(j)} as={Link} to="/Cart">
            
            
            <BsFillBasket2Fill/></Button>
            
          </Card.Body>
        </Card>
      </Col>
      
     ))}
  </Row> 
  </div>
  </Container>
  
  <Button className="ms-3"  variant="warning" size="lg" active href="/Home">Back to Home</Button>

  </div>
);
}

export default Shop;







