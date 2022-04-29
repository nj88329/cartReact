import './App.css';
import React,{ useState } from "react";
import { useEffect } from 'react';
import Details from './Details';
import Button from '@mui/material/Button';
import {useDispatch} from 'react-redux';
import { addProduct, removeProduct} from './slice/ProductSlice'
import Navbar from './Navbar';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';



import {
  ChakraProvider,
  extendTheme,
  Container,
  Heading,
  VStack,
  HStack,
  Text,
  Flex,
  Tag
} from "@chakra-ui/react";

import {
  Link
} from "react-router-dom";



function HomePage() {
  
   const dispatch = useDispatch();
  
  
    const [data, setData] = useState([]);


  
      const [check, setCheck] = useState(null)

    //  useEffect=(()=>{
    //    setTimeout(()=>{
    //     show();
    //    },1000)
     
    //  },[])

    const addToCart = (item) =>{

      console.log('item',data[item]);
      dispatch(addProduct(data[item]))
    
    }  
   
    
  const  seeDetails=((item)=>{
        console.log('homeitem',item);
        
       setCheck(item)
      
    })


    useEffect(() => {
      const fetchData =  () => {
        fetch(`https://fakestoreapi.com/products/`)
          .then(res=>res.json())
          .then(json=>setData(json))
      }
  
      fetchData();
    }, []);

    
    

     const show=(index)=>{

     if(index == 1)
     {
      fetch(`https://fakestoreapi.com/products/`)
     .then(res=>res.json())
     .then(json=>setData(json))
     }
   
    else if(index == 2)
     {
      fetch(`https://fakestoreapi.com/products/category/men's clothing`)
     .then(res=>res.json())
     .then(json=>setData(json))
     }

     else if(index==3){
      fetch(`https://fakestoreapi.com/products/category/jewelery`)
      .then(res=>res.json())
      .then(json=>setData(json))
     }
     else if(index==4){
      fetch(`https://fakestoreapi.com/products/category/women's clothing`)
      .then(res=>res.json())
      .then(json=>setData(json))
     }
  
     }

  return (

    
    <div className="App">
                             <Link to={'/cart'}><Button style={{backgroundColor:'greenyellow',width:'200px'}}>Cart Items</Button></Link>
               
                               <FormControl  style={{textAlign:'right',marginLeft:'1050px', marginTop:'-90px',width:'80px',position:'fixed',backgroundColor:'cyan'}}>
                                  <InputLabel id="demo-simple-select-label">Fliter</InputLabel>
                                  <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    label="Age"
                                    // onChange={handleChange}
                                  >
                                  <MenuItem value={1}> <Button style={{backgroundColor:'greenyellow',width:'200px'}} onClick={()=>show(1)} >All Products</Button></MenuItem>
                                    <MenuItem value={1}> <Button style={{backgroundColor:'greenyellow',width:'200px'}} onClick={()=>show(2)} >Men's CLothing</Button></MenuItem>
                                    <MenuItem value={2}><Button style={{backgroundColor:'greenyellow',width:'200px'}} onClick={()=>show(3)} >Jewelery</Button></MenuItem>
                                    <MenuItem value={1}> <Button style={{backgroundColor:'greenyellow',width:'200px'}} onClick={()=>show(4)} >Women's CLothing</Button></MenuItem>

                                  </Select>
                                </FormControl>

<div className="box" >

{
  data?.map((item, i)=>
 
  
    <div className="col-3" style={{border:'groove'}} key={i}>
    <div className="card" >
      <img src={item.image} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h2 className="card-title">{item.title}</h2>
        <h3>{`$ ${item.price}`}</h3>
       
      </div>
      <div className="card-footer"  style={{border:'groove', marginLeft:'39px',}}>
      <Button style={{backgroundColor:"Black"}} size="small" value={i}  onClick={(e)=>addToCart(e.target.value)}>Add It to Cart</Button>

    <Link to={`/details/${i+1}`}> <Button style={{backgroundColor:"Red"}} size="small" value= {i} onClick={()=>seeDetails(i)}> Check item Details</Button>  
    </Link>
      </div>
  </div>       
</div>
  )
}

</div>
       {/* {
        /* (check)?<a href='/details'/>:'' */
             (check != null)? <Details item={data[check]}/>:'' 
          } 
           
    </div>
  );
}

export default HomePage;

