import React, { Fragment } from "react";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import fifth1 from "./Photos/fifth1.jpg"
import fifth2 from "./Photos/fifth2.jpg"
import fifth3 from "./Photos/fifth3.jpg"
import fifth4 from "./Photos/fifth4.jpg"
import fifth5 from "./Photos/fifth5.jpg"
import fifth6 from "./Photos/fifth6.jpg"
import Row from 'react-bootstrap/Row';
import BottomCards1 from './BottomCards1.css'

function BottomCards() {
    return (
        <div className="main">
<div className="imgs">
    <Row xs={2} md={4} lg={4}>
        <img src={fifth1} ></img>
        <img src={fifth2}></img>
      </Row>
    <Row xs={2} md={4} lg={4}>
        <img src={fifth3} ></img>
        <img src={fifth4}></img>
      </Row>
      <Row xs={2} md={4} lg={4}>
        <img src={fifth5} ></img>
        <img src={fifth6}></img>
      </Row>

</div>
<div className="  text">
    <h1>Vintage Style</h1>
    <p>shcxjdhclxlcclxfhsnxjsxnjsjjsggxbxs,</p>
    <h1>#Lusionthem</h1>

</div>





        </div>
    );
  }
  
  export default BottomCards;