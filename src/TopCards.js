import React, { useState } from "react";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card'
import s1 from './Photos/s1.jpg'
import s2 from './Photos/s2.jpg'
import s3 from './Photos/s3.jpg'
import s4 from './Photos/s4.jpg'
import TopCards1 from './TopCards1.css'

function TopCards() {
    const [products]=useState([
        {id:0, img:s1, name: "Clothing", items:5 },
        {id:1, img:s2, name: "BagBrand", items:20},
        {id:2, img:s3, name: "Accessories", items:6} ,
        {id:3, img:s4, name: "Shoes", items:8}
    ])
    return (
      
      <Row xs={1} md={2} className="g-4">
        {products.map((j) => (
          <Col className="top"  key={j.id}>
            <Card>
              <Card.Img variant="top" src={j.img} />
              <Card.Body>
                <Card.Title>{j.name}</Card.Title>
                <Card.Text>Items:{j.items}</Card.Text>
                  
                
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      
    )
  }
  
  export default TopCards;









