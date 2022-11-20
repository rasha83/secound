import React, { Fragment, useState } from "react";

import { Button } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import t1 from './Photos/t1.jpg'
import t2 from './Photos/t2.jpg'
import t3 from './Photos/t3.jpg'
import t4 from './Photos/t4.jpg'

function ShopCards() {
    const [products]=useState([
        {id:0, img:t1, name: "Quilted Gilet With Hood", price:150 },
        {id:1, img:t2, name: "Quilted Gilet With Hood", price:200},
        {id:2, img:t3, name: "Quilted Gilet With Hood", price:260} ,
        {id:3, img:t4, name: "Quilted Gilet With Hood", price:180}
    ])
    
    
    return (
      <Fragment>
        <h1>Best Selling</h1>
      <Row xs={1} md={2} className="g-4" lg={4}>
        {products.map((j) => (
          <Col  key={j.id}>
            <Card>
              <Card.Img variant="top" src={j.img} />
              <Card.Body>
                <Card.Title>{j.name}</Card.Title>
                <Card.Text>{j.price}$</Card.Text>
                <Button variant="warning"  href="/Shop">Shop Now</Button>
                
             </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      </Fragment>
    );
  }
  
  export default ShopCards;