import React ,{ Fragment, useState } from "react";
import Carousel from 'react-bootstrap/Carousel'
import logoOne from "./Photos/logoOne.png"
import Home1 from "./Home1.css"
import logoTwo from "./Photos/logoTwo.png"
import TopCards from "./TopCards";
import ShopCards from "./ShopCards";
import MidCard from "./MidCard";
import { Container } from "react-bootstrap";
import BottomCards from "./BottomCards";



function Home(props) {
  const n=props.n
  // console.log(n)

    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Fragment>
        
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img  className="d-block w-100" src={logoOne} alt="First slide"/>   
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100"  src={logoTwo}  alt="Second slide"/>
        </Carousel.Item>
      </Carousel>
      <Container> 
      
       <TopCards/>
       <hr/>
       <ShopCards/>
       <hr/>
       <MidCard/>
       <hr/>
       <BottomCards/>
        </Container>  
       </Fragment>
    );
    
  }
 
  export default Home;