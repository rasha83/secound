import React ,{useState, Fragment} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from "./Home";
import { Routes , Route } from "react-router-dom"
import Shop from "./Shop";
import Cart from "./Cart";
import shopC1 from './Photos/shopC1.jpg'
import shopC2 from './Photos/shopC2.jpg'
import shopC3 from './Photos/shopC3.jpg'
import shopC4 from './Photos/shopC4.jpg'
import shopC5 from './Photos/shopC5.jpg'
import shopC6 from './Photos/shopC6.jpg'
import shopC7 from './Photos/shopC7.jpg'
import shopC8 from './Photos/shopC8.jpg'
import Nave from "./Nave";

const App =()=>{
  const [products,setproducts]=useState([
    {id:0, name:"Hood",  img:shopC1 ,price:250,count:0},
    {id:1, name:"Shirt", img:shopC2 ,price:200,count:0},
    {id:2, name:"Shirt", img:shopC3 ,price:150 ,count:0},
    {id:3, name:"Shirt", img:shopC4 ,price:300,count:0 },
    {id:4, name:"Shirt", img:shopC5 ,price:250,count:0 },
    {id:5, name:"Shirt", img:shopC6 ,price:200 ,count:0},
    {id:6, name:"Jeans", img:shopC7 ,price:200,count:0},
    {id:7, name:"Jeans", img:shopC8 ,price:250 ,count:0},
    {id:8, name:"Hood", img:shopC1 ,price:250,count:0},
])
// console.log(products)
 const add=(j)=>{
  const prod=products.map((p)=>{
  if(p.id===j.id){
    p.count++
  }
  return p
})
setproducts(prod)
}
const dec=(j)=>{
 const prod= products.map((p)=>{
  if(p.id===j.id && p.count>0){
    p.count--
  }
  return p
})
setproducts(prod)
}
const del=(j)=>{
  const prod= products.filter((p)=>{
   return p.id!==j.id
 })
 setproducts(prod)
 }

    return(
  <Fragment> 
    <Nave n={products}/>   
  <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Home" element={<Home/>} />
      <Route path="/Cart" element={<Cart y={products} z={add}  d={dec} r={del}/>} />
      <Route path="/Shop" element={<Shop x={products}  z={add}/>}/>
  </Routes>
  </Fragment>
  
    )
}



export default App;