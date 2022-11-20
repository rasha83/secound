import React from "react";
import { Button } from "react-bootstrap";
import Card from 'react-bootstrap/Card'
import f1 from'./Photos/f1.png'
import MidCard1 from './MidCard1.css'
import Row from 'react-bootstrap/Row'
import {Link} from "react-router-dom";

function MidCard() {
    return (
   <div className="mid">
    <Row xs={2} md={4} lg={4}>
      <Card className="bg-dark text-white  text-center " >
          <Card.Img src={f1} alt="Card image" />
         <Card.ImgOverlay>
         <Card.Title ><h5>MEERY</h5></Card.Title>
          <Card.Text>
           <h4>Christmas 40% Off</h4>
          </Card.Text>
          <Button variant="warning" as={Link} to="/Shop"> Shop Now</Button>
       </Card.ImgOverlay>
      </Card>
    <Card className="side">
      <Card.Body >
          <h1>Your Next</h1>
           <h3>Purchase 40%</h3>
       <Button variant="warning" as={Link} to="/Shop" > Shop Now</Button>
       </Card.Body>
    </Card>
  </Row> 
          </div>
        );
      }
      
     
  export default  MidCard;