import React, { Fragment,useState } from "react";
import { Navbar,Nav } from "react-bootstrap"
import {Container} from "react-bootstrap"
import {Badge} from "react-bootstrap"
import { BsFillBasket2Fill } from "react-icons/bs"
import { NavLink , Link  } from "react-router-dom";
import Nave1 from "./Nave1.css"
function Nave(props) {
  //  console.log(props.n)
  const badge=props.n.filter((i)=>i.count>0)
  const mybadge=badge.length
  // console.log(mybadge)
 return (
  <Fragment>
    <Navbar bg="warning" variant="dark">
       <Container>
         <Link to="/Home" className="link me-2" >Home</Link>
          <Nav className="me-auto"> 
            <Link to="/Shop" className="link " >Shope</Link> 
             
           </Nav> 
           
           <h1 className="text-center">Lusion</h1>  
          <  NavLink to="/Cart" className="me-2"><BsFillBasket2Fill/></NavLink>
          <Badge bg="danger">{mybadge}</Badge>
          
      </Container>
    </Navbar>
   
    </Fragment>
    )
}
  export default Nave;