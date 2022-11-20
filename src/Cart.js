import React from "react";

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card';
import cart from './cart.css'
import {Link } from "react-router-dom"
import Empty from "./Empty";
import {BsFillCartXFill }from "react-icons/bs"

   const Cart=(props) =>{
   const products=props.y
    // console.log(products)
   let prod =products.filter((i)=>i.count>0)
   // console.log(prod)
   const length=prod.length
    //console.log(length)
   let myarr= prod.map((x)=>eval(x.price*x.count))
   console.log(myarr)
   
   return(
    <div> 
    <div className="main">
         <Row xs={1} md={2} className="g-4" lg={4}>
        {prod.map((j) => (
          <Col key={j.id}>   
          <Card>
          <Card.Img variant="top" src={j.img} />
          <Card.Body>
            <Card.Title>{j.name}</Card.Title>
            <Card.Text> Price :{eval(j.price*j.count)} $</Card.Text>
            <Card.Text>Count:{j.count} piece</Card.Text>
            <label></label>
            <Button variant="outline-warning" className="me-2" onClick={()=>props.z(j)}>+</Button>
            <Button variant="outline-warning" className="me-2" onClick={()=>props.d(j)}>-</Button>
            <Button variant="outline-warning" onClick={()=>props.r(j)}><BsFillCartXFill/> </Button>
            </Card.Body>   
          </Card>
      </Col> 
     ))}
     
  </Row>
  

  </div>
  <div>
 
  {/* <label>{(prod.map((x)=>eval(x.price*x.count)))>0&&(prod.map((x)=>eval(x.price*x.count)).reduce((z,y)=>(z+y)))}</label> */}  
  <h1>Total Price :{myarr.length>0?myarr.reduce((z,y)=>(z+y)):0}</h1>
        <Button className="ms-3"  variant="warning" size="lg" as={Link} to="/Shop"> continue shopping</Button>
        
        </div>
  </div>
)
}
export default Cart;
